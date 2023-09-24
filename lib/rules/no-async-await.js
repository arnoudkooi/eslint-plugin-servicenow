module.exports = {
    create(context) {
      return {
        FunctionDeclaration(node) {
          if (node.async) {
            context.report({
              node,
              message: "async functions are not supported by ServiceNow."
            });
          }
        },
        Identifier(node) {
          if (node.name === 'await') {
            context.report({
              node,
              message: "await is not supported by ServiceNow."
            });
          }
        }
      };
    },
  };
  