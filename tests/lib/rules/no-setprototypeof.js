var rule = require("../../../lib/rules/no-setprototypeof");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("unsupported-ecmascript", rule, {
  valid: ["Object.create(proto);", "'hello'.trim();"],
  invalid: [
    {
      code: "Object.setPrototypeOf(obj, proto);",
      errors: [
        { message: "'Object.setPrototypeOf' is not supported by ServiceNow." },
      ],
    },
  ],
});
