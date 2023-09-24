module.exports = {
    create(context) {
      return {
        ForOfStatement(node) {
          if (node.await === true) {
            context.report({
              node,
              message: "for-await-of loops are not supported by ServiceNow."
            });
          }
        },
        FunctionDeclaration(node) {
          if (node.async && node.generator) {
            context.report({
              node,
              message: "async generators are not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  