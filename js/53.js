var maxSubArray = function(nums) {
  let sum = 0;
  let chk = true;
  const maxNum = (nums) => {
    let maxN = nums[0];
    for(let i = 0; i < nums.length; i++) {
      if(maxN < nums[i]) maxN = nums[i];
    }
    return maxN;
  }
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(nums[i] > 0) chk = false;
  }
  if(chk) return maxNum(nums);
  if(nums.length == 2) {
    if(sum < 0) return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  let sum2 = 0;
  for(let i = 0; i < nums.length; i++) {
    sum2 = nums[i] > 0 ? nums[i] : 0;

    for(let j = i+1; j < nums.length; j++) {
      sum2 += nums[j];
      if(sum2 > sum) sum = sum2;
    }
  }
  return sum;
  // massivning birinchi elementi bilan hammasini birma-bir qo'shib sum bilan tekshirib ko'ramiz;
};

const nums = [8,-19,5,-4,20];
const res = maxSubArray(nums);
console.log(res);