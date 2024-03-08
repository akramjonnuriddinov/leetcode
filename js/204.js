var countPrimes = function(n) {
  if(n == 0 || n == 1 || n == 2) return 0;
  let count = 0;
  for(let i = 3; i < n; i++) {
    let chk = true;
    for(let j = 2; j < i / 2 + 1; j++) {
      if(i % j == 0) chk = false;
    }
    if(chk) count++;
  }
  return count+1;
};

const n = 499979;
const res = countPrimes(n);
console.log(res);