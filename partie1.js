
const prix1 = 1500;
const prix2 = 2500;

let nb1500 = 0;
let nb2500 = 0;
let recette = 0;

for (let age = 11; age <= 20; age = age + 1) {
    if (age < 16) {
        console.log("Âge :", age);
        console.log("Prix du billet :", prix1, "FCFA");
        nb1500 = nb1500 + 1;
    } else {
        console.log("Âge :", age);
        console.log("Prix du billet :", prix2, "FCFA");
        nb2500 = nb2500 + 1;
    }
}

recette = nb1500 * prix1 + nb2500 * prix2;

console.log("Nombre de billets vendus à 1500 FCFA :", nb1500);
console.log("Nombre de billets vendus à 2500 FCFA :", nb2500);
console.log("Recette totale :", recette, "FCFA");
