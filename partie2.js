const prix1 = 1500;
const prix2 = 2500;
const bonus = 500;
let recette = 0;

for (let age = 11; age <= 20; age = age + 1) {
  let prix;

  if (age < 16) {
    prix = prix1;
  } else {
    prix = prix2;
  }
  if (age >= 18) {
    prix = prix - bonus;
  }
  recette = recette + prix;
  console.log("Âge : " + age + " → prix : " + prix + " FCFA");
}
console.log("Recette avec réduction : " + recette + " FCFA");