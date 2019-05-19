var rpn = function (expr) {
  if (expr.length === 1) { return expr[0]; }

  var stack = [];

  for (var i = 0; i < expr.length; i++) {
    var token = expr[i];

    if (typeof token === 'number') {
      stack.push(token);
      continue;
    }

    var right = stack.pop();
    var left = stack.pop();

    if (token === '+') { stack.push(left + right); }
    if (token === '*') { stack.push(left * right); }
    if (token === '/') { stack.push(left / right); }
    if (token === '-') { stack.push(left - right); }
  }

  return stack.pop();
};

module.exports = rpn;
