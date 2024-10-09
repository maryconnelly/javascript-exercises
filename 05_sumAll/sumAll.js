const sumAll = function(start, end) {
    if (start < 0 || end < 0 || isNaN(start) || isNaN(end) || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    };
    if (start > end) {
        let finalSum = 0;
    for (i=end; i <= start; i++) {
        finalSum += i;
    }
return finalSum;
    } else {
    let finalSum = 0;
    for (i=start; i <= end; i++) {
        finalSum += i;
    }
return finalSum;
}};

// Do not edit below this line
module.exports = sumAll;
