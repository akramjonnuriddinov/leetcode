var fizzBuzz = function(n) {
  let newArr = new Array();

  for(let i = 1; i <= n; i++) {
    if(i % 3 == 0 && i % 5 != 0) {
      newArr.push('Fizz');
    } else if(i % 5 == 0 && i % 3 != 0) {
      newArr.push('Buzz');
    } else if(i % 15 == 0) {
      newArr.push('FizzBuzz');
    } else {
      newArr.push(String(i));
    }
  }
  return newArr;
};

const n = 15;
const res = fizzBuzz(n);
console.log(res);