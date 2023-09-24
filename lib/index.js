/**
 * @fileoverview ServiceNow lint rules
 * @author Arnoud Kooi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");
var rules = requireIndex(__dirname + "/rules");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules,
  configs: {
    recommended: {
      plugins: [
        "servicenow", // Replace with the actual name of your plugin
      ],
      rules: {
        "servicenow/no-hardcoded-sysids": "warn",
        "servicenow/no-at-method": "warn",
        "servicenow/no-promise": "warn",
        "servicenow/no-weak-references": "warn",
        "servicenow/no-async-await": "warn",
        "servicenow/no-async-iterators": "warn",
        "servicenow/no-bigint": "warn",
        "servicenow/no-date-tojson": "warn",
        "servicenow/no-packages-calls": "error",
        "servicenow/no-private-class-methods": "error",
        "servicenow/no-proxy-internal-calls": "warn",
        "servicenow/no-regexp-lookbehind": "warn",
        "servicenow/no-setprototypeof": "error",
        "servicenow/no-shared-memory-atomics": "error",
        "servicenow/no-typed-arrays": "error",
      },
    },
  },
};
