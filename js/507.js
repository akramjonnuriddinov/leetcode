var checkPerfectNumber = function(num) {
  let s = 0;
  for(let i = 1; i <= num/2; i++) {
    if(num % i == 0) s += i;
  }
  if(num == s) return true;
  return false;
};

const num = 28;
const res = checkPerfectNumber(num);
console.log(res);