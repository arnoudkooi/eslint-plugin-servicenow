module.exports = {
    create(context) {
      return {
        Literal(node) {
          const text = node.value;
          
          if (typeof text === 'string' && /\\?\(\?<=/.test(text)) {
            context.report({
              node,
              message: "RegExp Lookbehind Assertions are not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  