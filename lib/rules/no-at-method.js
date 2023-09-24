module.exports = {
    create(context) {
      return {
        MemberExpression(node) {
          if (node.property.name === 'at') {
            context.report({
              node,
              message: `.at() method is not fully supported by ServiceNow.`,
            });
          }
        },
      };
    },
  };
  