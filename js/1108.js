var defangIPaddr = function(address) {
  address = Array.from(address);
  for(let i = 0; i < address.length; i++) {
    if(address[i] === '.') {
      address[i] = '[.]';
    }
  }
  return address.join('');
};

const address = "1.1.1.1";
const res = defangIPaddr(address);
console.log(res);