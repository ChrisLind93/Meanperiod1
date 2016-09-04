var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Hue', 'Ib'];
var filtered = names.filter(checkLength)

function checkLength(name) {
    if (name.length <=3) {
        return name;
    }
}

console.log(filtered)
console.log(names.map(function(name) {
    return name.toUpperCase()
}))