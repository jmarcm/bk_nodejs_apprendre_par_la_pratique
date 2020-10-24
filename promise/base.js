const p = new Promise((resolve) => resolve('promesse tenue'));
console.log(p);
console.log("un");
p.then(message => console.log(message));
console.log("deux");

/* Affiche
Promise { 'promesse tenue' }
un
deux
promesse tenue
*/