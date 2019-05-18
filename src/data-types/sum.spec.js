var expect = require('expect.js');
var sum = require('../src/sum.js');

describe('sum', function () {
  it('should sum positive numbers', function () {
    expect(sum(2, 3)).to.be(5);
    expect(sum(0, 3)).to.be(3);
    expect(sum(2, 0)).to.be(2);
    expect(sum(0, 0)).to.be(0);
  });

  it('should sum positive and negative numbers', function () {
    expect(sum(-1, 3)).to.be(2);
    expect(sum(2, -3)).to.be(-1);
    expect(sum(-2, -1)).to.be(-3);
  });

  it('should throw an exception with non-numeric params', function () {
    expect(sum).withArgs('a', 3).to.throwException();
    expect(sum).withArgs(3, true).to.throwException();
    expect(sum).withArgs({}, 3).to.throwException();
    expect(sum).withArgs(3, []).to.throwException();
    expect(sum).withArgs('2', 3).to.throwException();
  });

  it('should sum the first two parameters ignoring the rest', function () {
    expect(sum(1, 2, 3)).to.be(3);
  });
});