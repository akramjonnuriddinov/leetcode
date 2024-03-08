var findDisappearedNumbers = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  let newArr = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] + 1 !== nums[i+1] && nums[i] !== nums[i+1]) {
      for(let j = nums[i]+1; j < nums[i+1]; j++) {
        newArr.push(j);
      }
    }
  }
  if(newArr.length == 0) return nums[nums.length-1] + 1;
  return newArr;
};

const nums = [1,1]; // 1,2,2,3,3,4,7,8,
const res = findDisappearedNumbers(nums);

console.log(res);