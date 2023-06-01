var divide = function(dividend, divisor) {
  if(dividend == -2147483648) return 2147483647;
  if(dividend <= 2**31-1 && dividend >= (-2)**31 && divisor <= 2**31-1 && divisor >= (-2)**31) {
    return parseInt(dividend / divisor);
  } else {
    if(dividend / divisor > 0) {
      return 2147483647;
    } else {
      return -2147483648;
    }
  }
};

const dividend = 2147483648, divisor = -1;
const res = divide(dividend, divisor);

console.log(res);