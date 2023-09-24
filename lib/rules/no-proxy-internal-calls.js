module.exports = {
    create(context) {
      return {
        MemberExpression(node) {
          const disallowedMethods = [
            "__defineGetter__",
            "__defineSetter__",
            "__lookupGetter__",
            "__lookupSetter__",
          ];
  
          if (disallowedMethods.includes(node.property.name)) {
            context.report({
              node,
              message: `${node.property.name} is not supported by ServiceNow.`,
            });
          }
        },
      };
    },
  };
  