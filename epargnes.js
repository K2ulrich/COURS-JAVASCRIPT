let argent = 0;
let semaine = 0;
const prixJeu = 50000;
const epargneSemaine = 4000;
while (argent < prixJeu) {
    argent += epargneSemaine;
    semaine++;
}
console.log("Il faudra " + semaine + " semaines pour acheter le jeu vidéo.");