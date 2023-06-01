var isPalindrome = function(x) {
    var result = true;
    var x_str = x + "";
    
    for(var i = 0; i < x_str.length; i++) {
        if(x_str[i] != x_str[x_str.length - i - 1]) {
            result = false;
        }
    }
    return result;
};