/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
  const nums2 = []
  for (let i = 0; i < nums.length; i++) {
    nums2.push(nums[nums[i]])
  }
  return nums2
}

const nums = [0, 2, 1, 5, 3, 4]
console.log(buildArray(nums))
