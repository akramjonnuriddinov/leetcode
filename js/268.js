const missingNumber = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  if(nums.length == 1 && nums[0] == 0) return 1;
  else if(nums.length == 1) return nums[0] - 1;
  else if(nums[0] == 1 && nums[1] == 2) return 0;
  else {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] + 1 != nums[i+1]) return nums[i]+1;
    }
  }
};

const nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
const res = missingNumber(nums);
console.log(res);