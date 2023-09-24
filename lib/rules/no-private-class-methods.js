module.exports = {
    create(context) {
      return {
        MethodDefinition(node) {
          if (node.key.type === "PrivateIdentifier") {
            context.report({
              node,
              message: 'Private class methods are not fully supported by ServiceNow.',
            });
          }
        },
      };
    },
  };
  