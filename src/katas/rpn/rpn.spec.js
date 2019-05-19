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

    it('should evaluate sum expressions', function () {
      expect(rpn([1, 2, '+'])).to.be(3);
      expect(rpn([0, 2, '+'])).to.be(2);
      expect(rpn([1, 0, '+'])).to.be(1);
      expect(rpn([0, 0, '+'])).to.be(0);
    });

    it('should evalueate substraction expressions', function () {
      expect(rpn([5, 2, '-'])).to.be(3);
      expect(rpn([2, 0, '-'])).to.be(2);
      expect(rpn([0, 1, '-'])).to.be(-1);
      expect(rpn([2, 5, '-'])).to.be(-3);
    });

    it('should evaluate multiplication expressions', function () {
      expect(rpn([3, 4, '*'])).to.be(12);
      expect(rpn([2, 0, '*'])).to.be(0);
      expect(rpn([0, 3, '*'])).to.be(0);
      expect(rpn([2, -3, '*'])).to.be(-6);
      expect(rpn([-2, 3, '*'])).to.be(-6);
      expect(rpn([-2, -3, '*'])).to.be(6);
    });

    it('should evaluate division expressions', function () {
      expect(rpn([12, 4, '/'])).to.be(3);
      expect(rpn([2, 0, '/'])).to.be(Infinity);
      expect(rpn([0, 7, '/'])).to.be(0);
      expect(rpn([4, -2, '/'])).to.be(-2);
    });

    it('should evaluate nested expressions', function () {
      expect(rpn([1, 2, '+', 3, '+'])).to.be(6);
    });
  });
});
