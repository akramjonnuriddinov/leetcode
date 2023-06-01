var maximumGap = function(nums) {
  if(nums.length == 1) return 0;
  if(nums.length == 2) return Math.abs(nums[0] - nums[1]);
  let maxDif = 0;
  for(let i = 1; i < nums.length; i++) {
    if(Math.abs(nums[i] - nums[i-1]) == Math.abs(nums[i] - nums[i+1]) && Math.abs(nums[i] - nums[i-1]) > maxDif) maxDif = Math.abs(nums[i] - nums[i-1]);
    else if(Math.abs(nums[i] - nums[i-1]) > maxDif) maxDif = Math.abs(nums[i] - nums[i-1]);
  }
  return maxDif;
};

const nums = [3,6,9,1];
const res = maximumGap(nums);
console.log(res);