
const bikeIn = document.getElementById("bike-in")

const bikeArray = [
    {
        nome: 'Bianchi',
        peso: 9
    },
    {
        nome: 'Trek',
        peso: 7
    },
    {
        nome: 'Legnano',
        peso: 13
    },
    {
        nome: 'Pinarello',
        peso: 6
    },
    {
        nome: 'Specialized',
        peso: 8
    },
    {
        nome: 'Wilier',
        peso: 10
    }
];

const {nome, peso} = bikeArray[0];

let biciPiuLeggera = {
    nome,
    peso
}

for (let i = 1; i < bikeArray.length; i++) {
    const {nome, peso} = bikeArray[i]
    if (peso < biciPiuLeggera.peso) {
        biciPiuLeggera = {
            nome,
            peso
        }
    }
}

console.log(biciPiuLeggera.nome);
console.log(biciPiuLeggera.nome);

bikeIn.innerHTML = `<li> <h3> ${biciPiuLeggera.nome}</h3> </li>
                    <li> <h3> ${biciPiuLeggera.peso}</h3> </li>`