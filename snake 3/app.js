const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 1;
const max = 4;

const newArrayFor = [];
const newArrayFilter = [];

myArray.forEach((element, i,) => {
    element = myArray
    if (i >= min && i < max) {
        newArrayFor.push(element[i])
    }
})
console.log('---nuovo array con for Each---');
console.log(newArrayFor);



const myName = myArray.filter((element, i) => {
    element = myArray;
    if (i >= min && i < max) {
        newArrayFilter.push(element[i])
    }
})

console.log('---nuovo array con Filter---');
console.log(newArrayFilter);

