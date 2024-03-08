const isPalindrome = function (s) {
  let check = true
  s = s.split(' ').join('')
  s = s.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      check = false
    }
  }
  return check
}

const s = 'A man, a plan, a canal: Panamaa'
const res = isPalindrome(s)
console.log(res)
