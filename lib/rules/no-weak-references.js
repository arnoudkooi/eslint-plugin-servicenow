module.exports = {
    create(context) {
      return {
        Identifier(node) {
          const disallowedIdentifiers = ['WeakRef', 'FinalizationRegistry'];
          if (disallowedIdentifiers.includes(node.name)) {
            context.report({
              node,
              message: `'${node.name}' is not supported by ServiceNow.`,
            });
          }
        },
      };
    },
  };
  