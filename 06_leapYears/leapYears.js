const leapYears = function(year) {
    /* Rules for declaring a leap year
        1. Divisible by 4
        2. Not divisible by 100 unless divisible by 400
    */

    let result = true;

    if(year % 4 != 0)
        result = false;

    if(year % 100 == 0 && year % 400 != 0){
        result = false;
    }   

    return result;
};

// Do not edit below this line
module.exports = leapYears;
