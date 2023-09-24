module.exports = {
    create(context) {
      return {
        Identifier(node) {
          if (node.name === 'Promise') {
            context.report({
              node,
              message: "'Promise' is not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  