var findPeakElement = function(nums) {
  const maxNumber = (nums) => {
    let maxNum = nums[0];
    for(let i = 0; i < nums.length; i++) {
      if(maxNum < nums[i]) maxNum = nums[i];
    }
  }
  return maxNumber(nums);
};

const nums = [1,2,3,1];
const res = findPeakElement(nums);
console.log(res);