// variables construction labyrinthe
let wall = "wall";
let player = "player";
let goal = null;

// Variables d'exploriation
let indexExploration = 0;
let positionX = 0;
let positionY = 0;

// variables carrefour
let carrefour = [];

// Construction du labyrinthe
var labyrinthe =
    [
        //Y 0    1     2     3     4     5     6
        [player, wall, null, null, null, null, null], //0 x
        [null, wall, null, wall, wall, null, wall],   //1 x
        [null, wall, null, wall, goal, null, null],   //2 x
        [null, null, null, null, wall, wall, null],   //3 x
        [null, wall, null, wall, null, null, null],   //4 x
        [null, wall, null, null, null, wall, null]    //5 x
    ];

console.log(labyrinthe[positionX][positionY])
// condition d'ârret
while (labyrinthe[2][4] == null) {
console.log("je suis rentré");
    checkCarrefour(positionX, positionY, carrefour);
    console.log("positionX : " + positionX);
    console.log("positionY : " + positionY);
    // Bas
    if ((positionX + 1 <= 5) && (labyrinthe[positionX + 1][positionY] == null)) {
        indexExploration++;
        labyrinthe[positionX + 1][positionY] = indexExploration;
        console.log("je pose " + indexExploration);
        positionX++;
    }
    // Droite
    else if ((positionY + 1 <= 6) && (labyrinthe[positionX][positionY + 1] == null)) {
        indexExploration++;
        labyrinthe[positionX][positionY + 1] = indexExploration
        positionY++;
    }
    // Haut
    else if ((positionX - 1 >= 0) && (labyrinthe[positionX - 1][positionY] == null)) {
        indexExploration++;
        labyrinthe[positionX - 1][positionY] = indexExploration
        positionX--;
    }
    // Gauche
    else if ((positionY - 1 > 0) && (labyrinthe[positionX][positionY - 1] == null)) {
        indexExploration++;
        labyrinthe[positionX][positionY - 1] = indexExploration
        positionY--;
    }
    // test carrefour
    else {
        // retour au dernier carrefour
        console.log("je suis kéblo")

        if (carrefour.length > 0){

            positionX = carrefour[carrefour.length-1][0];
            positionY = carrefour[carrefour.length-1][1];
            if (checkCarrefour(positionX, positionY, carrefour) == false) {
                console.log("je supprime")
                carrefour.pop();
            };
        }


    }
    console.table(labyrinthe);
    console.table(carrefour);
}

// Affichage du tableau en parcourant
let test = "";
for(let i = 0; i < labyrinthe.length; i++){
    test = "";
    for(let j = 0; j < labyrinthe[i].length; j++){
       test += " " + labyrinthe[i][j];
    }
    console.log(test);
}

console.log("fin: " + positionX,positionY)
console.log("vous êtes arrivé au bout du labyrinthe !")

function checkCarrefour(positionX, positionY, carrefour) {

    let countForCarrefour = 0;

    // Bas
    if (positionX < 5) {
        if (labyrinthe[positionX + 1][positionY] == null) {
            countForCarrefour++;
        }
    }
    // Droite
    if (positionY < 6) {
        if (labyrinthe[positionX][positionY + 1] == null) {
            countForCarrefour++;
        }
    }
    // Haut
    if (positionX - 1 > 0) {
        if (labyrinthe[positionX - 1][positionY] == null) {
            countForCarrefour++;
        }
    }
    // Gauche
    if (positionY - 1 > 0) {
        if (labyrinthe[positionX][positionY - 1] == null) {
            countForCarrefour++;
        }
    }
    // test carrefour
    if (countForCarrefour >= 2) {
        carrefour.push([positionX, positionY])
    }

    if (countForCarrefour == 0){
        return false;
    }
}