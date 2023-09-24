var rule = require("../../../lib/rules/no-date-tojson");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-date-tojson", rule, {
  valid: ["Date.now();", "dateObj.toISOString();"],
  invalid: [
    {
      code: "Date.prototype.toJSON();",
      errors: [
        { message: "'Date.prototype.toJSON' is not supported by ServiceNow." },
      ],
    },
  ],
});
