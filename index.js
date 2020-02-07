exports.stringify = function(obj) {
    return JSON.stringify(obj, function replacer (key, value) {
        return (typeof value === "function")? value.toString() :  value;
    })    
}
exports.parse = function(str) {
    return JSON.parse(str, function reviver(key, value) {
        if (typeof value==="string" && value.indexOf("function") ===0) {
            eval('var f = ' + value);
            return f;
        } else {
            return value;
        }
    })
}