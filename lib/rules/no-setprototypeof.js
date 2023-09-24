module.exports = {
    create(context) {
      return {
        CallExpression(node) {
          if (node.callee.type !== 'MemberExpression') {
            return;
          }
  
          const { object, property } = node.callee;
          
          // Existing Object.setPrototypeOf check
          if (object.name === 'Object' && property.name === 'setPrototypeOf') {
            context.report({
              node,
              message: "'Object.setPrototypeOf' is not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  