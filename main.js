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
console.log(biciPiuLeggera);

document.getElementById('bicicletta_leggera').innerHTML = 
`
<h1>La Bcicicletta più leggera pesa ${biciPiuLeggera}kg</h1>
`






//Snack2:
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */