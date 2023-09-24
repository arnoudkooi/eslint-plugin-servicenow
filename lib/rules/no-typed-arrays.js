"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallows the use of Typed Arrays.",
      category: "Possible Errors",
    },
  },
  create: function (context) {
    return {
      NewExpression(node) {
        const disallowedTypes = [
          "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array",
          "Uint16Array", "Int32Array", "Uint32Array", "Float32Array",
          "Float64Array", "DataView"
        ];
        if (disallowedTypes.includes(node.callee.name)) {
          context.report({
            node,
            message: `${node.callee.name} is not supported by ServiceNow.`,
          });
        }
      }
    };
  },
};
