var firstUniqChar = function(s) {
  s = Array.from(s);
  return s;
  // let chk = true;
  // for(let i = 0; i < s.length; i++) {
  //   for(let j = s.length - 1; j > i; j--) {
  //     if(s[i] == s[j]) chk = false;
  //   }
  //   if(chk) return i;
  // }
  // return -1;
};

const s = "loveleetcode";
const res = firstUniqChar(s);

console.log(res);