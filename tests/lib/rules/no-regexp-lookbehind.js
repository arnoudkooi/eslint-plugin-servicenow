var rule = require("../../../lib/rules/no-regexp-lookbehind");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-regexp-lookbehind", rule, {
  valid: ["'/abc/'", "'/^abc$/'", "'/abc/gi'"],
  invalid: [
    {
      code: "'/(?<=a)bc/'",
      errors: [{ message: "RegExp Lookbehind Assertions are not supported by ServiceNow." }],
    }
  ],
});
