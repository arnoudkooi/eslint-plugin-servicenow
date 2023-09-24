/**
 * @fileoverview Scripts do not directly call Java packages
 * @author Arnoud Kooi
 */
"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Scripts should not directly call Java packages",
      category: "Possible Errors"
    },
    schema: []
  },
  create: function(context) {
    return {
      Identifier(node) {
        if (node.name === 'Packages') {
          context.report({
            node,
            message: "Scripts should not directly call Java packages"
          });
        }
      }
    };
  }
};
