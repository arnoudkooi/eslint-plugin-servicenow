var rule = require("../../../lib/rules/no-promise");
var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  });

ruleTester.run("no-promise", rule, {
    valid: ["const x = 1;"],
    invalid: [
      {
        code: "const p = new Promise((resolve, reject) => {});",
        errors: [{ message: "'Promise' is not supported by ServiceNow." }]
      },
      {
        code: "Promise.resolve();",
        errors: [{ message: "'Promise' is not supported by ServiceNow." }]
      }
    ],
  });
  