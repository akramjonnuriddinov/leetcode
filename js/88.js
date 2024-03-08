var merge = function(nums1, m, nums2, n) {
  for(let i = nums1.length - 1; i >= m; i--) {
    nums1.splice(i, 1);
  }
  for(let j = nums2.length - 1; j >= n; j--) {
    nums.splice(j, 1);
  }
  for(let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  return nums1.sort(function(a, b) {
    return a - b;
  });
};

const nums1 = [0], m = 0, nums2 = [1], n = 1;
const res = merge(nums1, m, nums2, n);
console.log(res);