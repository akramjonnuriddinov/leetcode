var reverseString = function(s) {
  s.toLowerCase;
  for(let i = s.length - 1; i >= 0; i--) {
    s.push(s[i]);
    s.splice(i, 1);
  }
  return s;
};

const s = ["h","e","l","l","o"];
const res = reverseString(s);
console.log(res);