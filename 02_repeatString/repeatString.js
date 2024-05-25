const repeatString = function(str, num) {
    if(num < 0)
        return "ERROR";
    
    let final_string = "";

    for(i = 0; i < num; i++)
        final_string += str;

    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
