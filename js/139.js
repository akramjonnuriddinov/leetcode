var wordBreak = function(s, wordDict) {
  s = Array.from(s);
  wordDict = wordDict.join('');
  wordDict = Array.from(wordDict);
  if(s.length >= wordDict.length) {
    for(let i = 0; i < wordDict.length; i++) {
      if(s[i] != wordDict[i]) return false;
    }
  }
  else if(s.length <= wordDict.length) {
    for(let i = 0; i < s.length; i++) {
      if(s[i] != wordDict[i]) return false;
    }
  }
  return true;
};
const s = "applepenapple", wordDict = ["apple","pen"];
const res = wordBreak(s, wordDict);

console.log(res);