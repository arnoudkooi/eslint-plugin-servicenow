var rule = require("../../../lib/rules/no-shared-memory-atomics");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-shared-memory-atomics", rule, {
  valid: ["ArrayBuffer", "Math"],
  invalid: [
    {
      code: "SharedArrayBuffer",
      errors: [{ message: "SharedArrayBuffer is not supported by ServiceNow." }],
    },
    {
      code: "Atomics",
      errors: [{ message: "Atomics is not supported by ServiceNow." }],
    },
  ],
});
