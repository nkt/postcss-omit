const postcss = require('postcss');

const prefixes = ['webkit', 'moz', 'ms', 'o'];

function omit(opts) {
  if (!opts) {
    return () => {};
  }

  const props = Object.create(null);
  if (Array.isArray(opts.props)) {
    opts.props.forEach((prop) => {
      props[prop] = true;
    });

    if (opts.prefixes) {
      prefixes.forEach((prefix) => {
        opts.props.forEach((prop) => {
          props['-' + prefix + '-' + prop] = true;
        });
      });
    }
  }

  return (css) => {
    css.walkDecls((decl) => {
      if (props[decl.prop]) {
        decl.remove();
      }
    });
  };
}

module.exports = postcss.plugin('postcss-omit', omit);
