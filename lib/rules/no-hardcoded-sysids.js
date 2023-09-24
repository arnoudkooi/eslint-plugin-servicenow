/**
 * @fileoverview No hardcoded sysids in scripts
 * @author Arnoud Kooi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "No hardcoded sysids in scripts",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Literal(node) {
                var regex = /^[0-9a-z]{32}$/;
                if (regex.test(node.value)) {
                    context.report(node, "Do not use hardcoded sys_id's");
                }
            }
        };
    }
};
