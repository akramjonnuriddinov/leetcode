const isValid = function (s) {
  let check = true
  const combinations = ['()', '{}', '[]']
  let arr = []
  for (let i = 0; i < s.length - 2; i = i + 2) {
    if (s[i] != s[i + 1]) {
      check = false
    }
  }
  return check
}

const s = '()[]{}'
const res = isValid(s)
console.log(res)
