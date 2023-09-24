/**
 * @fileoverview Don't use gr as variablename
 * @author Arnoud Kooi
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Don't use gr as variablename",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        return {
            Identifier(node) {
                if (node.name == 'gr') {
                    context.report(node, "Don't use gr as name for a GlideRecord variable");
                }
            }
        }
    }
};
