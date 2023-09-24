const rule = require("../../../lib/rules/no-typed-arrays");
const RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});

ruleTester.run("no-typed-arrays", rule, {
  valid: [
    "let arr = [1, 2, 3];",
    "let obj = { byte: 8 };"
  ],
  invalid: [
    {
      code: "let int8 = new Int8Array();",
      errors: [{ message: "Int8Array is not supported by ServiceNow." }],
    }
  ],
});
