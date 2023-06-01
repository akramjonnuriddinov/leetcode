var longestCommonPrefix = function(strs) {
  let prefix = [];
  for(let i = 0; i < strs.length; i++) {
    for(let j = 0; j < strs[i].length; j++) {
      if(strs[i][j] == strs[i+1][j]) prefix.push(strs[i][j])
    }
  }
};

const strs = ["flower","flow","flight"];
const res = longestCommonPrefix(strs);

console.log(res);