var fizzbuzz = function (num) {
  if (num % 3 === 0 && num % 5 === 0){return 'FizzBuzz'; }

  if (num % 3 === 0 || containsNumbers(toStr(num), 3)) { return 'Fizz'; }

  if (num % 5 === 0 || containsNumbers(toStr(num), 5)) { return 'Buzz'; }
  return num;
};

var demo = function(){
  for (let index = 0; index < 20; index++) {
   console.log(fizzbuzz(index+1));
  }
}

function toStr(num) {
  return num.toString();
}

function containsNumbers(str, number) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === number.toString()) {
      return true;
    }
  }
  return false;
}

//demo();

module.exports = fizzbuzz;

