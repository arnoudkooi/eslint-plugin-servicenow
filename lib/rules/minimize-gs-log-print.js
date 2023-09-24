/**
 * @fileoverview Minimize gs.log and gs.print logging in production
 * @author Arnoud Kooi
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Minimize gs.log and gs.print logging in production",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        return {
            "CallExpression": function(node) {
                var callee = node.callee;
                 if ( callee.type == "MemberExpression"){
                if(callee.object.name === "gs" &&
                   (callee.property.name === "log" || callee.property.name === "print"))
                     {
                        context.report(node, "Minimize gs.log and gs.print logging in production");
                    }
                }
            }
        }
    }
};
