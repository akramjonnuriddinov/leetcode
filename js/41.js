var firstMissingPositive = function(nums) {
  let newArr = [];
  nums.sort();
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      newArr.push(nums[i]);
    }
  }
  newArr.sort();
  if(newArr[0] != 1) return 1;
  else {
    for(let i = 0; i < newArr.length; i++) {
      if((newArr[i] + 1) !== newArr[i+1] && newArr[i] !== newArr[i+1]) {
        return newArr[i] + 1;
      }
    }
  }
};

const nums = [1,2,3,4,5,6,7,8,9,20];
const res = firstMissingPositive(nums);
console.log(res);