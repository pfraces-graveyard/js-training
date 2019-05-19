Data Types
==========

Static and Dynamic Typed Languages
----------------------------------

<https://android.jlelse.eu/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b>

Data Types
----------

  * `undefined`
  * `null`
  * `boolean`
  * `number`
  * `string`
  * `function`
  * `object`
  * `array`

### Type Detection

#### `typeof`

```js
describe('javascript', function () {
  describe('typeof', function () {
    it('should detect the type of some expressions', function () {
      expect(typeof 3).to.be('number');
      expect(typeof 'abc').to.be('string');
      expect(typeof function () {}).to.be('function');
    });

    it('should have difficulties with some other', function () {
      expect(typeof {}).to.be('object');
      expect(typeof []).to.be('object');
      expect(typeof null).to.be('object')
    });
  });
});
```
