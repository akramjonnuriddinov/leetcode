var sortPeople = function(names, heights) {
  return heights.sort(function(a, b) {
    return a - b;
  })
};

const names = ["Mary","John","Emma"], heights = [180,165,170];
const res = sortPeople(names, heights);
console.log(res);