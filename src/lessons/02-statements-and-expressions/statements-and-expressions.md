Statements and Expressions
==========================

<http://2ality.com/2012/09/expressions-vs-statements.html>

Statements
----------

Statements are the tasks you ask to do to the language interpreter. A computer
program is a collection of statements which are executed in strict order from
top to bottom

Stamentes don't produce a value, so they cannot be assigned to variables,
passed as arguments to functions nor be returned by functions

The end of a statement is marked with the semicolon character (`;`)

```js
console.log('hello world'); // this is an statement
```

Expressions
-----------

  * An expression produces a value.
  * An expression can be composed by other expressions

### Literals

Any **expression** producing the same expression is a literal

```js
3 // number literal (produces 3)
'abc' // string literal (produces 'abc')
{ x: 1 } // object literal (produces { x: 1 })
3 + 4 // not a literal (produces 7)

var foo = true;
foo // not a literal (produces true)
```

_(you can check it out in the REPL by executing `node` without params)_

### Operators

  * Unary (`! expr`)
  * Binary (`expr + expr`)
  * Ternary (`expr ? expr : expr`)

#### Logic operators

  * `===`, `!==`
  * `&&`, `||`
  * `>`, `<`, `>=`, `<=`

#### Arithmetic operators

  * `+`, `-`, `*`, `/`, `%`
