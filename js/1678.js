var interpret = function(command) {
  command = Array.from(command);
  for(let i = 0; i < command.length; i++) {
    if(command[i] == "(" && command[i+1] == ")") {
      command[i] = 'o';
      command[i+1] = '';
    } else if(command[i] == "(" && command[i+1] == "a" && command[i+2] == "l") {
      command[i] = '';
      command[i+3] = '';
    }
  }
  return command.join('');
};

const command = "(al)G(al)()()G";
const res = interpret(command);
console.log(res);