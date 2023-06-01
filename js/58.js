var lengthOfLastWord = function(s) {
  s = Array.from(s);
  let maxLen = 0;
  for(let i = 0; i < s.length; i++) {
    let newArr = new Array();
    let newLen = newArr.length;
    if(s[i] != ' ') {
      newArr.push(s[i]);
      for(let j = i+1; j < s.length; j++) {
        if(s[j] != ' ') {
          newArr.push(s[j]);
        }
      }
      if(maxLen < newLen) maxLen = newLen;
    }
  }
  return maxLen;
};

const s = "   fly me   to   the moon  ";
const res = lengthOfLastWord(s);
console.log(res);