const removeFromArray = function() {

let element_array = arguments[0];

for (let arg_index = 1; arg_index < arguments.length; arg_index++) {
    for (let element_index = 0; element_index < element_array.length; element_index++) {
        if (element_array[element_index] === arguments[arg_index]){
            element_array.splice(element_index, 1);
            element_index--;
        } 
    }
}

return element_array;

};

// Do not edit below this line
module.exports = removeFromArray;
