const reverseString = function(str) {

    let reversed_string = "";

    for(i = str.length - 1; i > -1; i--)
        reversed_string += str[i];
    
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
