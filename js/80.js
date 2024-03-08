// MY SOLUTION - !O(x)
// var removeDuplicates = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for(let j = nums.length - 1; j > i; j--) {
//       if(nums[i] == nums[j]) {
//         nums.splice(i, 1);
//         count++;
//       }
//     }
//     if(count >= 1) nums.push(nums[i]);
//   }
//   return nums.sort(function(a, b) {return a - b});
// };

// LEETCODE SOLUTION - O(1)
var removeDuplicates = function(nums) {
  if(nums.length <= 2) return nums;
  for(let i = 2; i < nums.length; i++) {
    let prev = nums[i-1]  
    let prevPrev = nums[i-2]
    
    if(nums[i] === prev && nums[i] === prevPrev) {
      nums.splice(i, 1)
      continue;
    }
  }
  return nums;
};

const nums = [1,1,1,2,2,3];
const res = removeDuplicates(nums);
console.log(res);