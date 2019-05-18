var expect = require('expect.js');

describe('typeof', function () {
  it('should detect boolean expressions', function () {
    expect(typeof true).to.be('boolean');
    expect(typeof false).to.be('boolean');
  });

  it('should detect number expressions', function () {
    expect(typeof 3).to.be('number');
    expect(typeof -2).to.be('number');
    expect(typeof 0).to.be('number');
    expect(typeof 1.5).to.be('number');
    expect(typeof Infinity).to.be('number');
    expect(typeof -Infinity).to.be('number');
    expect(typeof NaN).to.be('number');
  });

  it('should detect string expressions', function () {
    expect(typeof 'abc').to.be('string');
    expect(typeof '3').to.be('string');
    expect(typeof 'false').to.be('string');
  });

  it('should detect function expressions', function () {
    expect(typeof function () {}).to.be('function');
  });
});