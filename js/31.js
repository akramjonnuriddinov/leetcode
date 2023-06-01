var nextPermutation = function(nums) {
  if(nums.length == 1) return nums;
  let newArr = [];
  for(let i = 0; i < nums.length; i++) {
    newArr.push(nums[i]);
  }
  newArr.sort();
  if(newArr.join('')*1 != nums.join('')*1) return 0;
  else {
    let last = nums[nums.length - 1];
    let last2 = nums[nums.length - 2];
    let a = last;
    last = last2;
    last2 = a;
    nums.splice(nums.length-1, 1);
    nums.splice(nums.length-1, 1);
    nums.push(last2, last);
    return nums;
  }
};
const nums = [1,2,3];
const res = nextPermutation(nums);
console.log(res);