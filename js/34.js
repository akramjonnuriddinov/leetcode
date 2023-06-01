var searchRange = function(nums, target) {
  if(nums.length == 1 && nums.includes(target)) return [0, 0];
  let newArr = new Array();
  
  if(nums.includes(target)) {
    newArr.push(nums.findIndex(el => el == target));
    for(let i = nums.length-1; i >= 0; i--) {
      if(nums[i] == target) {
        newArr.push(i);
        break;
      }
    }
  }
  else newArr = [-1, -1];
  return newArr;
};

const nums = [3,3,3], target = 3;
const res = searchRange(nums, target);
console.log(res);
