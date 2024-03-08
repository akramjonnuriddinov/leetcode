var reverse = function(x) {
  const reverseInt = (x) => {
    let newArr = [];
    if(x == 0) return 0;
    else if(x > 0) {
      x = String(x);
      x = Array.from(x);
      for(let i = x.length-1; i >= 0; i--) {
        newArr.push(x[i]);
      }
      return 1 * newArr.join('');
    } else {
      x = -x;
      x = String(x);
      x = Array.from(x);
      for(let i = x.length-1; i >= 0; i--) {
        newArr.push(x[i]);
      }
      return -1 * newArr.join('');
    }
  }
  return reverseInt(x);
};

const x = -123;
const res = reverse(x);

console.log(res);