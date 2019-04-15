var expect = require('expect.js');
var romanNumerals = require('./roman-numerals.js');

describe('roman-numerals.js', function () {
  it('should be a function', function () {
    expect(romanNumerals).to.be.a('function');
  });

  it('should return I when number is one', function () {
    expect(romanNumerals(1)).to.be('I');
  });

  it('should return V when number is five', function () {
    expect(romanNumerals(5)).to.be('V');
  });

  it('should return X when number is ten', function () {
    expect(romanNumerals(10)).to.be('X');
  });

  it('should return L when number is fifty', function () {
    expect(romanNumerals(50)).to.be('L');
  });

  it('should return C when number is hundred', function () {
    expect(romanNumerals(100)).to.be('C');
  });

  it('should return D when number is five hundred', function () {
    expect(romanNumerals(500)).to.be('D');
  });

  it('should return M when number is one thousand', function () {
    expect(romanNumerals(1000)).to.be('M');
  });

  it('should return II when number is two', function () {
    expect(romanNumerals(2)).to.be('II');
  });

  it('should return III when number is three', function () {
    expect(romanNumerals(3)).to.be('III');
  });

  /* it('should return IV when number is four', function () {
    expect(romanNumerals(4)).to.be('IV');
  }); */

  it('should return VI when number is six', function () {
    expect(romanNumerals(6)).to.be('VI');
  });

  it('should return VII when number is seven', function () {
    expect(romanNumerals(7)).to.be('VII');
  });

  it('should return VIII when number is eigth', function () {
    expect(romanNumerals(8)).to.be('VIII');
  });

  /* it('should return IX when number is nine', function () {
    expect(romanNumerals(9)).to.be('IX');
  }); */
});
