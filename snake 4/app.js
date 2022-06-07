

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

/* __________ 1 __________ */
const plates = students.map((element,) =>  {
    return element.name.toUpperCase();

});

console.log('__________ 1 __________');
console.log('---targa con solo nomi degli studenti---');
console.log(plates);

/* __________ 2 __________ */

const voteStudent = students.filter((element,) => {
    if(element.grades > 70) {
        return true
    }
})

console.log('__________ 2 __________');
console.log('---studenti che hanno un totale di voti superiore a 70---');
console.log(voteStudent);

/* __________ 3 __________ */

const id = students.filter((element,) => {
    if(element.grades > 70 && element.id > 120) {
        return true
    }
})
console.log('__________ 3 __________');
console.log('---studenti che hanno un totale di voti superiore a 70 e id superiore a 120---');
console.log(id);