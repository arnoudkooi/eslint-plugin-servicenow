var rule = require("../../../lib/rules/no-bigint");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});

ruleTester.run("no-bigint", rule, {
  valid: ["var x = 42;"],
  invalid: [
    {
      code: "var x = BigInt(42);",
      errors: [{ message: "'BigInt' is not supported by ServiceNow." }],
    },
    {
      code: "var x = new BigInt64Array();",
      errors: [{ message: "'BigInt64Array' is not supported by ServiceNow." }],
    },
    {
      code: "var x = new BigUint64Array();",
      errors: [{ message: "'BigUint64Array' is not supported by ServiceNow." }],
    }
  ],
});
