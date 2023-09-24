/**
 * @fileoverview No hardcoded sysids in scripts
 * @author Arnoud Kooi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-hardcoded-sysids"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-hardcoded-sysids", rule, {

    valid: [
        {
            code: "var foo = true",
        }
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var sys_id = 'a2328e0fdba66340d6a102d5ca9619de';",
            errors: [{
                message: "Do not use hardcoded sys_id's"
            }]
        }
    ]
});
