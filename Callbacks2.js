var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Hue', 'Ib'];

function toUpper(name) {
    return name.toUpperCase()
}

function checkLength(name) {
    if (name.length <=3) {
        return name;
    }
}

function myFilter(array, lengthOfName) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if (lengthOfName(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}
console.log(myFilter(names, checkLength));


function myMap(array, toUpper) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray.push(toUpper(array[i]))
    }
    return newArray;
}
console.log(myMap(names, toUpper));