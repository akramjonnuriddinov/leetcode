var twoSum = function (nums, target) {
  var result = [], a, b;
  for(var i = 0; i < nums.length; i++) {
      for(var j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] == target) {
              a = i;
              b = j;
          }
      }
  }
  result.push(a, b);
  return result;
};