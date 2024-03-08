const moveZeroes = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
  }
  for(let i = 0; i < count; i++) nums.push(0);
  return nums;
};

const nums = [0,1,0,3,12]; //0,1,0
const res = moveZeroes(nums);

console.log(res);