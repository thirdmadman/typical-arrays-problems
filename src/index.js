
exports.min = function min (array) {
    return ((array != null) && (array.length > 0)) ? (array.sort((a,b) => (a === b) ? 0 : (a < b ? -1 : 1))[0]) : 0;
}

exports.max = function max (array) {
    return ((array != null) && (array.length > 0)) ? (array.sort((a,b) => (a === b) ? 0 : (a < b ? -1 : 1))[array.length-1]) : 0;
}

exports.avg = function avg (array) {
    return ((array != null) && (array.length > 0)) ? (array.reduce((prev,cur,i) => prev + cur)/array.length) : 0;
}
