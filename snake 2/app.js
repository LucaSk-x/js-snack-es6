

const squadreArray = [
    {
        nome: 'Aradeo Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Neviano Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Maglie Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Lecce Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Santa Caterina Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Gallipoli Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Otranto Calcio',
        puntiFatti: 0,
        fallisubiti: 0,
    },
]

for (let i = 0; i < squadreArray.length; i++) {
    squadreArray[i].puntiFatti = Math.floor(Math.random() * 50)
    squadreArray[i].fallisubiti = Math.floor(Math.random() * 40)
}

let nuoveSquadre = [];

for (let i = 0 ; i < squadreArray.length; i++) {
    const {nome, fallisubiti} = squadreArray[i]
    const squadra = {
        nome,
        fallisubiti,
    }
    nuoveSquadre.push(squadra)
}

console.log(nuoveSquadre);

for (let i = 0; i < nuoveSquadre.length; i++){
    const {nome, fallisubiti} = nuoveSquadre[i];
    console.log ('Nome squadra: ' + nome);
    console.log('Falli subiti: ' + fallisubiti)
}