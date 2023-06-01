var search = function(nums, target) {
  return nums.includes(target) ? nums.findIndex(el => el == target) : -1;
};

const nums = [4,5,6,7,0,1,2], target = 3;
const res = search(nums, target);
console.log(res);