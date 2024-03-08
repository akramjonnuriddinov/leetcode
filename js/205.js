var isIsomorphic = function(s, t) {
  let chk = true;
  for(let i = 0; i < s.length; i++) {
    if(s[i] != s[i]) return false;
  }
  if(s.length <= 1 && t.length <= 1) return true;
  else {
    for(let i = 0; i < s.length; i++) {
      if(s[i] != t[i]) chk = false;
      for(let j = s.length - 1; j > i; j--) {
        if(s[i] == s[j] && t[i] == t[j]) return true;
      }
    }
    if(chk) return true;
    return false;
  }
};

const s = "ab", t = "ab"
const res = isIsomorphic(s, t);

console.log(res);