module.exports = {
    create(context) {
      return {
        CatchClause(node) {
          if (!node.param) {
            context.report({
              node,
              message: "Optional catch binding is not supported by ServiceNow."
            });
          }
        }
      };
    }
  };
  