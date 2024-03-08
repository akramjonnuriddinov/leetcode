const findDifference = function (nums1, nums2) {
  // add need remove duplicate function
  let res1 = [],
    res2 = []
  nums1.sort((a, b) => {
    return a - b
  })
  nums2.sort((a, b) => {
    return a - b
  })

  for (let i = 0; i < nums1.length; i++) {
    let check1 = true
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) check1 = false
    }
    if (check1) res1.push(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    let check2 = true
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] == nums1[j]) check2 = false
    }
    if (check2) res2.push(nums2[i])
  }
  for (let i = 0; i < res1.length; i++) {
    for (let j = res1.length - 1; j > i; j--) {
      if (res1[i] == res1[j]) {
        res1.splice(i, 1)
      }
    }
  }
  for (let i = 0; i < res2.length; i++) {
    for (let j = res2.length - 1; j > i; j--) {
      if (res2[i] == res2[j]) {
        res2.splice(i, 1)
      }
    }
  }
  return [res1, res2]
}

const nums1 = [1, 2, 3],
  nums2 = [2, 4, 6]
const res = findDifference(nums1, nums2)
console.log(res)
