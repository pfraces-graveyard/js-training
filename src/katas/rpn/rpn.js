var rpn = function (expr) {
  if (expr.length === 1) { return expr[0]; }

  var left = expr[0];
  var right = expr[1];
  var op = expr[2];

  if (op === '+') { return left + right; }
  if (op === '-') { return left - right; }
  if (op === '*') { return left * right; }
};

module.exports = rpn;
