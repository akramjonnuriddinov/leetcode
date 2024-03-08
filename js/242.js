var isAnagram = function(s, t) {
  const s1 = Array.from(s).sort();
  const t1 = Array.from(t).sort();
  if(s1.length != t1.length) return false;
  else {
    for(let i = 0; i < s1.length; i++) {
      if(s1[i] != t1[i]) return false; 
    }
  }
  return true;
};

const s = "a", t = "ab";
const res = isAnagram(s, t);

console.log(res);