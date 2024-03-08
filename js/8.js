var myAtoi = function(s) {
  s = s.replace(/\s+/g, ' ').trim();
  const returnInt = (element) => parseInt(element, 10);
  s = Array.from(s);
  let isMinus = false;
  if(s.includes("-")) isMinus = true;
  s = s.map(returnInt);
  let newArr = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] % 1 == 0) newArr.push(s[i]);
  }
  if(isMinus) return +newArr.join('') * (-1);
  return +newArr.join('');
};

const s = "-4193 with words";
const res = myAtoi(s);
console.log(res);