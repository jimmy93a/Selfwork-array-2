
function calcolaMedia(array1) {
    
    let somma1 = array1.reduce((acc, n)=> acc + n, 0);
    let media = somma1 / array1.length;
    return media;
    
}

let array = [3,5,10,2,8];

let media1 = calcolaMedia(array);
console.log(media1);

// Ho fatto anche la versione per i numeri più grandi.
let grandi = array.filter((numeriDopo)=> numeriDopo > media1);
console.log(grandi);

let piccoli = array.filter((numeriPrima)=> numeriPrima < media1);
console.log(piccoli);



console.log('Il totale dei numeri sopra la media è ', grandi.length);
console.log('Il totale dei numeri sotto la media è ', piccoli.length);



