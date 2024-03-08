/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
  return nums.concat(nums)
}

const nums = [1, 2, 1]
console.log(getConcatenation(nums))
