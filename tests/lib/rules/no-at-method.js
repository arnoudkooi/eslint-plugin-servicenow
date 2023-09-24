const rule = require("../../../lib/rules/no-at-method");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
});

ruleTester.run("no-at-method", rule, {
  valid: ["'hello'.charAt(1);", "arr[1];", "arr.slice(1,2);"],
  invalid: [
    {
      code: "arr.at(1);",
      errors: [{ message: `.at() method is not fully supported by ServiceNow.` }],
    },
    {
      code: "typedArr.at(1);",
      errors: [{ message: `.at() method is not fully supported by ServiceNow.` }],
    },
    {
      code: "'hello'.at(1);",
      errors: [{ message: `.at() method is not fully supported by ServiceNow.` }],
    },
  ],
});
