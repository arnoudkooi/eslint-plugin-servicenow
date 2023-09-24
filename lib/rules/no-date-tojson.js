module.exports = {
    create(context) {
      return {
        CallExpression(node) {
          if (
            node.callee.type === 'MemberExpression' &&
            node.callee.object.type === 'MemberExpression' &&
            node.callee.object.object.name === 'Date' &&
            node.callee.object.property.name === 'prototype' &&
            node.callee.property.name === 'toJSON'
          ) {
            context.report({
              node,
              message: "'Date.prototype.toJSON' is not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  