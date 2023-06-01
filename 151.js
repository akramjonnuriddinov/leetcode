var reverseWords = function(s) {
  s = s.replace(/\s+/g, ' ').trim();
  s = s.split(' ');
  let s2 = [];
  for(let i = s.length-1; i >= 0; i--) {
    s2.push(s[i]);
  }
  s = [];
  s = s2;
  return s.join(' ');
};

const s = "the     sky is blue   ";
const res = reverseWords(s);

console.log(res);