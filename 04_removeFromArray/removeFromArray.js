const removeFromArray = function(arr, ...restArgs) {
    // filter array so that it doesn't contain t he restArg values
    let resultArr = [];

    for(let i = 0; i < arr.length; i++){
        let passTest = true;

        for(let j = 0; j < restArgs.length; j++){
            if(arr[i] === restArgs[j]){
                passTest = false;
                break;
            }
        }

        if(passTest)
            resultArr.push(arr[i]);
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
