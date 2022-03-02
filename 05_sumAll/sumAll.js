const sumAll = function(start, end) {
    // args must be of type number
    if(typeof(start) != typeof(1) || typeof(end) != typeof(1))
        return "ERROR";

    // args must not be negative
    if(start < 0 || end < 0)
        return "ERROR";
    
    // swap start and end values 
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }

    let result = 0;
    for(let i = start; i <= end; i++){
        result += i;
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
