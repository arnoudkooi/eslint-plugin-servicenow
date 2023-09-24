module.exports = {
    create(context) {
      return {
        Identifier(node) {
          const disallowedObjects = ["SharedArrayBuffer", "Atomics"];
          
          if (disallowedObjects.includes(node.name)) {
            context.report({
              node,
              message: `${node.name} is not supported by ServiceNow.`,
            });
          }
        },
      };
    },
  };
  