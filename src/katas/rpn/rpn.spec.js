var expect = require('expect.js');
var rpn = require('./rpn.js');

describe.only('rpn.js', function () {
  describe('rpn', function () {
    it('should be a function', function () {
      expect(rpn).to.be.a('function');
    });

    it('should evaluate literal expressions', function () {
      expect(rpn([1])).to.be(1);
      expect(rpn([3])).to.be(3);
      expect(rpn([5])).to.be(5);
      expect(rpn([0])).to.be(0);
      expect(rpn([12])).to.be(12);
    });

    it('should evaluate expressions with `sum` operator', function () {
      expect(rpn([1, 2, '+'])).to.be(3);
    });
  });
});