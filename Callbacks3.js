var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Hue', 'Ib'];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
};

function checkLength(name) {
    if (name.length <=3) {
        return name;
    }
}

function toUpper(name) {
    return name.toUpperCase()
}

console.log(names.myFilter(checkLength));
console.log(names.myMap(toUpper));