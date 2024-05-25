const sumAll = function(num1, num2) {
    let final_sum = 0;

    if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0)
        return "ERROR";

    if (num1 < num2) {
        while (num1 <= num2) {
            final_sum += num1;
            num1++;
        }
    } else {
        while (num2 <= num1) {
            final_sum += num2;
            num2++;
        }
    }

    return final_sum;

};

// Do not edit below this line
module.exports = sumAll;
