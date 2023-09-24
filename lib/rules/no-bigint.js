module.exports = {
    create(context) {
      return {
        Identifier(node) {
          const disallowedIdentifiers = [
            'BigInt',
            'BigInt64Array',
            'BigUint64Array'
          ];
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
  