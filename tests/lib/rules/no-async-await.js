var rule = require("../../../lib/rules/no-async-await");
var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  });
  
  ruleTester.run("no-async-await", rule, {
    valid: ["function normalFunction() {}", "var x = 1;"],
    invalid: [
        {
          code: "async function test() {}",
          errors: [{ message: "async functions are not supported by ServiceNow." }],
        },
        {
          code: "/*eslint-disable no-await-in-loop*/ async function wrapper() { await someAsyncFunction(); } /*eslint-enable no-await-in-loop*/",
          errors: [{ message: "async functions are not supported by ServiceNow." }]
        }
      ],
      
      
  });
  