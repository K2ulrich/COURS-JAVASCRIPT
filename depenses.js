const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// Depart 1: convertir les trois dépenses en nombres
const transport=Number(transportTexte);
const alimentation=Number(alimentationTexte);
const loisirs=Number(loisirsTexte);

// Depart 2: calculez le total, le budget restant et budgetRespected
const total = transport + alimentation + loisirs;
const reste = budget - total;
const budgetRespected = total <= budget; // true si on a pas dépassé le budget, false sinon

// Depart 3 : afficher le rapport avec des littéraux de gabarit
console.log(`Rapport de depenses pour ${nom}`); 
console.log(`Budget : ${budget}FCFA`);
console.log(`Transport : ${transport}FCFA`);
console.log(`Alimentation : ${alimentation} FCFA`);
console.log(`Loisirs : ${loisirs}FCFA`);
console.log(`Total : ${total}FCFA`);
console.log(`Reste : ${reste}FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);
