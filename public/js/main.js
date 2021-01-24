// let personne = {
//     nom : 'jojo',
//     lieu : 'maison',
//     argent : 100,
//     mainDroite : [],
//     mainGauche : [],
//     seDeplacer (x){
//         this.lieu = x
//         console.log(`${this.nom} part a ${this.lieu.nom}`);
//     },
//     payerArticle(){
//         console.log(`${this.nom} paye ces article`);
//     },
//     couper(){
//         console.log(`${this.nom} coupe ces article avec un ${this.outils}`);
//     }
// }

// let lieu = {
//     nom: 'maison',
//     personnes : [],
// }
// let outil = {
//     nom : 'couteau',
//     action : 'coupé',
// }
// class Ingrédients {
//     constructor(nom, etat, prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }
// let oignon = new Ingrédients('oignon', 'entier', 1.5)
// let oeuf = new Ingrédients('oeuf', 'entier', 1)
// let epice = new Ingrédients('epice', 'moulu', 1)
// let fromage = new Ingrédients('fromage', 'entier', 1)

// let lieu2 = {
//     nom : 'epicerie',
//     personne : [],
//     paniers : [panier ={
//         type : 'panier',
//         contenue : [],
//     }],
//     ingrédients : [oignon, oeuf, epice, fromage]
// }

// let poele = {
//     contenue : [0],
//     cuir() {
//         setTimeout(()=> {
//             if (this.contenue[0] == 0) {
//                 console.log('cuit');  
//             }
//         }, 4000)
//     }
// }


// let bol = {
//     contenu: [],
//     melanger(nomMelange){
//         let newMelange = {
//             nomMelange: nomMelange,
//             etat: 'pas cuit'
//         }
//         this.contenu = [newMelange]
//     }
// }
// bol.melanger('omelette')
// console.log(bol);

// // DEBUT de L'omelette // 

// console.log(personne.nom + " est actuellement à la " + personne.lieu);

// //

// personne.seDeplacer(lieu2)

// // 

// personne.mainDroite.push(lieu2.paniers)
// console.log(personne);
// console.log(lieu2);
// lieu2.paniers[panier.contenue.splice(0, 1)]

// //

// console.log(`${personne.nom} a pris un ${panier.type}`);

// //
// console.log(lieu2.ingrédients[0]);
// lieu2.ingrédients.forEach(element => {
//     personne.mainDroite[panier.contenue.push(element)];
//     console.log(element);
// });
// console.log(personne.mainDroite);

// //






                ////////////////////////////







let personne = {
    nom: 'jojo',
    lieu: 'maison',
    argent: 100,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(x){
        this.lieu = x;
        console.log(`${this.nom} se déplace vers ${this.lieu.nom}`);
    },
    payerArticle(ingredients){
            this.argent = this.argent - ingredients.prix
            console.log(`${this.nom} paye ses articles`);
    },
    couper(ingredients){
        ingredients.etat = "coupé"
        console.log(`${ingredients.nom} est maintenant ${ingredients.etat}`);
    }
}
// * Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
// */
let maison = {
    nom: 'maison',
    personnes: [],
}
/**
/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/
let outil = {
    nom: 'couteau',
    action: 'coupé',
}

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let oignon = new Ingredients('oignon', 'entier', 2.5);
let oeufs = new Ingredients('oeufs', 'entier', 4.5);
let epice = new Ingredients('epice', 'moulu', 3.75);
let fromage = new Ingredients('fromage', 'coupé', 2.5);

// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau. */
let epicerie = {
    nom: 'épicerie',
    personnes: [],
    paniers: [ panier= {
        type: 'panier', 
        contenu: [],
    }],
    ingredients: [oignon, oeufs, epice, fromage],
}

// Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 //
let poele = {
    contenue : [0],
    cuir() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('cuite');  
            }
        }, 4000)
    }
}

// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
let bol = {
    contenu: [],
    melanger(nomMelange){
        let newMelange = {
            nom: nomMelange,
            etat: 'pas cuit'
        }
        this.contenu = [newMelange];
    }
}
bol.melanger('omelette');
console.log(bol);

/**** DEBUT DE L'OMELETTE ****/
// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
console.log(personne.nom + " est actuellement à la " + personne.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
personne.seDeplacer(epicerie);
console.log(personne.nom + " va à l' " + epicerie.nom);
// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
personne.mainDroite.push(epicerie.paniers[0]);
console.log(personne.mainDroite);

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
epicerie.paniers[panier.contenu.splice(0, 1)]
console.log(epicerie);
// console.log(`${personnage.nom} a pris un ${type du panier}`);
console.log(`${personne.nom} a pris un ${panier.type}`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
epicerie.ingredients.forEach(element => {
    personne.mainDroite[0].contenu.push(element);
    console.log(`${personne.nom} a pris quelques ${element.nom}`);
})

// Afficher un message à chaque ingrédient pris
console.log(personne.mainDroite);
// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
personne.mainDroite[0].contenu.forEach(element => {
    personne.payerArticle(element)
});

// Afficher un message de ce qu'il reste d'argent sur le personnage.
console.log(`Il reste ${personne.argent} euros a ${personne.nom}`);
// rentrer à la maison (comme ça on pourra cuisiner)
personne.seDeplacer(maison);
// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
personne.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element)
    personne.mainDroite[0].contenu = personne.mainDroite[0].contenu.filter(item => item !== element)
    console.log(`l'${element.nom} a été ajouter dans le bol`);
});

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
personne.mainDroite.splice(epicerie.paniers);

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
personne.seDeplacer(epicerie);

// Afficher un petit message
console.log(`${personne.nom} a remis le ${panier.type}`);

// Retourner à la maison pour continuer l'omelette
personne.seDeplacer(maison);

// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
personne.couper(bol.contenu[1]);

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
bol.melanger('omelette');
console.log(bol.contenu);
// Afficher un message avec le nouveau mélange
console.log(`${bol.contenu} sont melangés`);
// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
bol.contenu.push(poele)
console.log(poele);
console.log(bol);
// Cuire l'omelette avec la méthode de la poele
poele.cuir()

// Afficher un message final, notre omelette est cuite :)
let prete = {
    contenue : [0],
    cuir2() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('votre omelette est cuite');  
            }
        }, 5000)
    }
}
prete.cuir2()