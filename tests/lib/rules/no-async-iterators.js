var rule = require("../../../lib/rules/no-async-iterators");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});
ruleTester.run("no-async-iterators", rule, {
    valid: ["for (let x of arr) {}", "function* gen() {}"],
    invalid: [
      {
        code: "async function test() { for await (let x of asyncArr) {} }",
        errors: [{ message: "for-await-of loops are not supported by ServiceNow." }],
      },
      {
        code: "async function* gen() {}",
        errors: [{ message: "async generators are not supported by ServiceNow." }],
      }
    ],
  });