var arrangeCoins = function(n) {
  let i = 1;
  let newArr = [];
  while(n >= i) {
    n -= i;
    newArr.push(i);
    i++;
  }
  const maxNum = (num) => {
    maxN = num[0];
    for(let i = 0; i < num.length; i++) {
      if(maxN < num[i]) maxN = num[i];
    }
    return maxN;
  }
  return maxNum(newArr);
};

const n = 8;
const res = arrangeCoins(n);
console.log(res);