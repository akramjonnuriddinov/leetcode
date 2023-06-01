var mostWordsFound = function(sentences) {
  let max;
  let count;
  max = 0;
  for(let i = 0; i < sentences.length; i++) {
    count = 0;
    for(let j = 0; j < sentences[i].length; j++) {
      if(sentences[i][j] == ' ') count++;
    }
    if(count > max) max = count;
  }

  return max+1;
};

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much", "please wait", "continue to fight", "continue to win"];
const res = mostWordsFound(sentences);

console.log(res);