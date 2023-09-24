const rule = require("../../../lib/rules/no-private-class-methods");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({

    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      requireConfigFile: false,
    },
  });

ruleTester.run("no-private-class-methods", rule, {
  valid: [
    "class Test { method1() {} static method2() {} }",
  ],
  invalid: [
    {
      code: "class Test { #privateMethod() {} }",
      errors: [{ message: 'Private class methods are not fully supported by ServiceNow.' }],
    },
    {
      code: "class Test { static #privateStaticMethod() {} }",
      errors: [{ message: 'Private class methods are not fully supported by ServiceNow.' }],
    },
    {
      code: "class Test { get #privateField() {} }",
      errors: [{ message: 'Private class methods are not fully supported by ServiceNow.' }],
    },
    {
      code: "class Test { static get #privateField() {} }",
      errors: [{ message: 'Private class methods are not fully supported by ServiceNow.' }],
    },
  ],
});
