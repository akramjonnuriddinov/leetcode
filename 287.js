var findDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = nums.length-1; j > i; j--) {
      if(nums[i] == nums[j]) return nums[i];
    }
  }
};

const nums = [3,1,3,4,2];
const res = findDuplicate(nums);
console.log(res);