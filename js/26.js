var removeDuplicates = function(nums) {
  
  for(let i = 0; i < nums.length; i++) {
    for(let j = nums.length; j > i; j--) {
      if(nums[i] == nums[j]) {
        nums.splice(i, 1);
      }
    }
  }
  return nums.length;
};
