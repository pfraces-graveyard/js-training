Word wrap
=========

<http://codingdojo.org/kata/WordWrap/>

You write a class called Wrapper, that has a single static function named wrap
that takes two arguments, a string, and a column number. The function returns
the string, but with line breaks inserted at just the right places to make sure
that no line is longer than the column number. You try to break lines at word
boundaries

Like a word processor, break the line by replacing the last space in a line
with a newline

Implementations
---------------

<http://blog.code-cop.org/2011/08/word-wrap-kata-variants.html>

### Recursive

The kata's task is to write a function that, like a word processor, breaks the
line by replacing the last space in a line with a newline. The most straight
forward solution to this is IMHO the recursive one. I only need to consider the
first blank or forced break and call myself with the remaining text

```java
public String wrap(String line, int maxLineLen) {
   if (line.length() <= maxLineLen) {
      return line;
   }
   int indexOfBlank = line.lastIndexOf(BLANK, maxLineLen);
   int split;
   int offset;
   if (indexOfBlank > -1) {
      split = indexOfBlank;
      offset = 1;
   } else {
      split = maxLineLen;
      offset = 0;
   }
   return line.substring(0, split) + NEWLINE +
      wrap(line.substring(split + offset), maxLineLen);
}
```

Usually kata is not about the final solution, but about the process to get
there. Still I want to compare different solutions, so let's analyse this one.

If the line needs to be split `n` times (into `n+1` shorter lines) then this
solution creates `3*n String` objects and additional `n StringBuilders` for
string concatenation. `4*n` objects are created

### Tail recursive

To be [tail recursive](http://c2.com/cgi/wiki?TailRecursion) a function's last
statement must be the recursive call

```java
public String wrap(String line, int maxLineLen) {
   StringBuilder accumulator = new StringBuilder();
   wrap(line, maxLineLen, accumulator);
   return accumulator.toString();
}
private void wrap(String remainingLine, int maxLineLen, StringBuilder accumulator) {
   if (remainingLine.length() <= maxLineLen) {
      accumulator.append(remainingLine);
      return;
   }
   int indexOfBlank = remainingLine.lastIndexOf(BLANK, maxLineLen);
   int split;
   int offset;
   if (indexOfBlank > -1) {
      split = indexOfBlank;
      offset = 1;
   } else {
      split = maxLineLen;
      offset = 0;
   }
   accumulator.append(remainingLine.substring(0, split));
   accumulator.append(NEWLINE);
   wrap(remainingLine.substring(split + offset), maxLineLen, accumulator);
}
```

This solution creates the new `String` in the very end. It needs 2 `Strings`
per new line and only one `StringBuilder` and a final `String` to return it.
`2*n+2` objects are created

### Loop

A tail recursive function can be rewritten to reuse the stack frame
transforming it into a plain loop. As Java does not support that optimisation,
I do it by hand

```java
public String wrap(String line, int maxLineLen) {
   StringBuilder accumulator = new StringBuilder();
   String remainingLine = line;
   while (remainingLine.length() > maxLineLen) {
      int indexOfBlank = remainingLine.lastIndexOf(BLANK, maxLineLen);
      int split;
      int offset;
      if (indexOfBlank > -1) {
         split = indexOfBlank;
         offset = 1;
      } else {
         split = maxLineLen;
         offset = 0;
      }
      accumulator.append(remainingLine.substring(0, split));
      accumulator.append(NEWLINE);
      remainingLine = remainingLine.substring(split + offset);
   }
   accumulator.append(remainingLine);
   return accumulator.toString();
}
```

The _loopy_ solution creates the same number of objects as the tail recursive
one, but has reduced call overhead. Still `2*n+2` objects are created

### Optimised Loop

Let's optimise away the splitting of the remaining line because it gets split
again in the next call, so all these `Strings` are only temporarily used

```java
public String wrap(String line, int maxLineLen) {
   StringBuilder accumulator = new StringBuilder();
   int pos = 0;
   while (pos + maxLineLen < line.length()) {
      int indexOfBlank = line.lastIndexOf(BLANK, pos + maxLineLen);
      int split;
      int offset;
      if (indexOfBlank > pos - 1) {
         split = indexOfBlank;
         offset = 1;
      } else {
         split = pos + maxLineLen;
         offset = 0;
      }
      accumulator.append(line.substring(pos, split));
      accumulator.append(NEWLINE);
      pos = split + offset;
   }
   accumulator.append(line.substring(pos));
   return accumulator.toString();
}
```

Now only one `String` is created per new line, one for the last remaining part
and one after the final concatenation. `n+3` objects are created

### Using a buffer

If I could get rid of half of the `String` splitting, why not drop the other
half too?

```java
public String wrap(String line, int maxLineLen) {
   StringBuilder accumulator = new StringBuilder();
   accumulator.append(line);
   int pos = 0;
   int inserted = 0;
   while (pos + maxLineLen < line.length()) {
      int indexOfBlank = line.lastIndexOf(BLANK, pos + maxLineLen);
      if (indexOfBlank > pos - 1) {
         accumulator.setCharAt(inserted + indexOfBlank, NEWLINE);
         pos = indexOfBlank + 1;
      } else {
         accumulator.insert(inserted + pos + maxLineLen, NEWLINE);
         pos = pos + maxLineLen;
         inserted++;
      }
   }
   return accumulator.toString();
}
```

Only one `StringBuilder` and one `String` are created. 2 objects are created.
This is definitely the most garbage collector friendly solution because it
creates only one temporary object, the `StringBuilder`
