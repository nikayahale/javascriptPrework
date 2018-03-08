var onecat = [55, 32, 15, 22]
var onedog = [45, 60, 20]

function increment(num) {
    num++
    console.log('Num increased by 1!', num)
}
increment(1);

var dogs = ['maltese', 'husky', 'malamute']
var cats = ['black', 'siamese', 'calico']

function catsAndDogs(dog, cat) {
    var value1 = cat[0]
    var value2 = dog[0]
    var breeds = value1 + value2
    console.log("Some cat and dog breeds are "+ breeds)
}

function dividing(x, y) {
    return x / y;
}
var doStuff = dividing(20, 2)
console.log(doStuff)