var rpn = function (expr) {
  if (expr.length === 1) { return expr[0]; }
  return expr[0] + expr[1];
};

module.exports = rpn;
