//Snack 1:
//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso.
const bici = [
    {nome: 'graziella', peso: 10},
    {nome: 'bici della nonna', peso: 12},
    {nome: 'bici in carbonio', peso: 7},
    {nome: 'bici in legno', peso: 11},
    {nome: 'bici senza ruote', peso: 9}
];
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
function CiclaERitornaMinore(lista) {
    let arrayPesiBici = [];
    for (let i = 0; i < lista.length; i++) {

        let {peso} = lista[i];
        arrayPesiBici.push(peso);
    }
    return Math.min(...arrayPesiBici);
}
const biciPiuLeggera = CiclaERitornaMinore(bici);
//console.log(biciPiuLeggera);
//cerco il nome della bici in base al peso minore
let nomeBici;
for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso === biciPiuLeggera) {
        nomeBici = bici[i].nome;
    }
} 
//console.log(nomeBici);
document.getElementById('bicicletta_leggera').innerHTML = 
`
<h1>La Bicicletta più leggera pesa ${biciPiuLeggera}kg ed è la ${nomeBici}</h1>
`


//Snack2:
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.*/
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    {nome: 'atalanta', punti: 0, falli: 0},
    {nome: 'milan', punti: 0, falli: 0},
    {nome: 'juventus', punti: 0, falli: 0},
    {nome: 'fiorentina', punti: 0, falli: 0},
    {nome: 'roma', punti: 0, falli: 0}
];

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(1, 10);
    squadre[i].falli = randomNumber(1, 10);
}
console.log(squadre);
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 
const nomiFalli = [];
for (let i = 0; i < squadre.length; i++) {
    const {nome, falli} = squadre[i];
    nomiFalli.push({nome, falli});
}
console.log(nomiFalli);


//Snack 3:
const lista = ['a', 'b', 'cia', 'doa', 'ai', 'tre', 'gua'];
const a = 2;
const b = 6;

//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
function filterElement(lista, a, b) {
    const elCompresi = lista.filter( (value, i) => {
        if ((i+1) >= a && (i+1) <= b) {
            return true
        }
        return false
    });
    console.log(elCompresi);
}
filterElement(lista, a , b);
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

function checkIndex(lista, a, b) {
    const newArray = [];
    lista.forEach((element, index) => {
        if ((index + 1) >= a && (index + 1) <= b) {
            newArray.push(element);
        }
    });
    console.log(newArray);
    return newArray
}
checkIndex(lista, a, b)