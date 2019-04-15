var atoms = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var getNearestBase = function (n) {
    if (n >= 1000) {
        return 'M';
    }
    if (n >= 500) {
        return 'D';
    }
    if (n >= 100) {
        return 'C';
    }
    if (n >= 50) {
        return 'L';
    }
    if (n >= 10) {
        return 'X';
    }
    if(n>=5){
        return 'V';
    }
    if (n >= 1) {
        return 'I';
    }
};

var baseToNumber = function (base) {
    return atoms[base];
};

var romanNumerals = function (n) {
    // I = 1, V = 5, X = 10, L = 50
    //, C = 100, D = 500, M = 1000
    var rest = n;
    var romanNumber  ='';
    while (rest > 0) {
        var base = getNearestBase(rest);
        romanNumber = romanNumber + base;
        var baseNumber = baseToNumber(base);
        rest = rest - baseNumber;
    }
    return romanNumber;
};



console.log(romanNumerals(8));

module.exports = romanNumerals;
