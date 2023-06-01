const longestCommonPrefix = function (strs) {
  let res = []
  let result = ''
  for (let i = 0; i < strs.length; i++) {
    // res.push(strs[i].split(''))
    if (strs[i].includes(strs[i + 1])) {
      result = strs[i + 1]
    }
  }
  // for (let i = 0; i < res.length; i++) {
  //   if (res[i].includes(res[i + 1])) {
  //     result += res[i]
  //   }
  // }
  console.log(result)
}

const strs = ['flower', 'floww', 'flight']
longestCommonPrefix(strs)

// console.log(res)
