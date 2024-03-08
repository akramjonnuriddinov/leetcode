var finalValueAfterOperations = function(operations) {
  let s= 0;
  for(let i = 0; i < operations.length; i++) {
    if(operations[i].includes('--')) s--;
    else if(operations[i].includes('++')) s++;
  }
  return s;
};

const operations = ["++X","++X","X++"];
const res = finalValueAfterOperations(operations);
console.log(res);