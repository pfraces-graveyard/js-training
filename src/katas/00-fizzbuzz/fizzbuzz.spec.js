var expect = require('expect.js');
var fizzbuzz = require('./fizzbuzz.js');

describe('fizzbuzz', function () {
  it('should be a function', function () {
    expect(fizzbuzz).to.be.a('function');
  });

  it('should return the received number with numbers non multiple of three and five', function () {
    expect(fizzbuzz(1)).to.be(1);
    expect(fizzbuzz(2)).to.be(2);
  });

  it('should return Fizz with numbers multiple of three', function () {
    expect(fizzbuzz(3)).to.be('Fizz');
  });

  it('should return Fizz with numbers multiple of five', function () {
    expect(fizzbuzz(5)).to.be('Buzz');
  });
  it('should return Fizz with numbers multiple of three and five', function () {
    expect(fizzbuzz(15)).to.be('FizzBuzz');
  });

  it('should return Fizz if contains three', function () {
    expect(fizzbuzz(13)).to.be('Fizz');
    expect(fizzbuzz(23)).to.be('Fizz');
    expect(fizzbuzz(31)).to.be('Fizz');
  });

  it('should return Buzz if contains five', function () {
    expect(fizzbuzz(53)).to.be('Fizz');
    expect(fizzbuzz(52)).to.be('Buzz');
    expect(fizzbuzz(15)).not.to.be('Fizz');

  });

});

