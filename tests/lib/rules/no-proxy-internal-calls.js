var rule = require("../../../lib/rules/no-proxy-internal-calls");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-proxy-internal-calls", rule, {
  valid: ["obj.method()", "obj.getProperty()"],
  invalid: [
    {
      code: "obj.__defineGetter__('prop', function() {});",
      errors: [{ message: "__defineGetter__ is not supported by ServiceNow." }],
    },
    {
      code: "obj.__defineSetter__('prop', function() {});",
      errors: [{ message: "__defineSetter__ is not supported by ServiceNow." }],
    },
    {
      code: "obj.__lookupGetter__('prop');",
      errors: [{ message: "__lookupGetter__ is not supported by ServiceNow." }],
    },
    {
      code: "obj.__lookupSetter__('prop');",
      errors: [{ message: "__lookupSetter__ is not supported by ServiceNow." }],
    },
  ],
});
