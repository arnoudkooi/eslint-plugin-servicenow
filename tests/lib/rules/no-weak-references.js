var rule = require("../../../lib/rules/no-weak-references");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});

ruleTester.run("no-weak-references", rule, {
  valid: ["var x = {};"],
  invalid: [
    {
      code: "var x = new WeakRef(obj);",
      errors: [{ message: "'WeakRef' is not supported by ServiceNow." }],
    },
    {
      code: "var registry = new FinalizationRegistry(cleanup);",
      errors: [{ message: "'FinalizationRegistry' is not supported by ServiceNow." }],
    },
  ],
});
