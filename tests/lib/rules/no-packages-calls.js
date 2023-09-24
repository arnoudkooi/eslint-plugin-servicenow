const rule = require("../../../lib/rules/no-packages-calls");
const RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  });

ruleTester.run("no-packages-calls", rule, {
  valid: [
    "let someVar = 1;",
    "function exampleFunc() {}"
  ],
  invalid: [
    {
      code: "let java = Packages.com.glide.Glide;",
      errors: [{ message: "Scripts should not directly call Java packages" }]
    },
    {
      code: "let test = Packages;",
      errors: [{ message: "Scripts should not directly call Java packages" }]
    }
  ]
});
