/**
 * @fileoverview Scripts do not directly call Java packages
 * @author Arnoud Kooi
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Java packages are effectively unsupported API calls. They should not be used.",
            category: "Act",
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
                if (node.name == 'Packages') {
                    context.report(node, "Scripts should not directly call Java packages");
                }
            }
        }
    }
};
