var countDigitOne = function(n) {
  let newArr = new Array();

  for(let i = 0; i <= n; i++) {
    newArr.push(i);
  }
  newArr = newArr.join('');
  newArr = Array.from(newArr);
  let count = 0;
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] == 1) {
      count++;
    }
  }
  return count;
};

const n = 0;
const res = countDigitOne(n);

console.log(res);