var rule = require("../../../lib/rules/no-optional-catch-binding");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});

ruleTester.run("no-optional-catch-binding", rule, {
  valid: ["try {} catch(e) {}"],
  invalid: [
    {
      code: "try {} catch {}",
      errors: [
        { message: "Optional catch binding is not supported by ServiceNow." }
      ],
    },
  ],
});
