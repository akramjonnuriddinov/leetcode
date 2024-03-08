var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

const haystack = "sadbutsad", needle = "butt";
const res = strStr(haystack, needle);

console.log(res);