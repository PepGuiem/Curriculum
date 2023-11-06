var principal = document.querySelector(".lamp-content1");
var principal2 = document.querySelector(".game")
var onlyCurriculun = document.querySelector(".lamp-onlyCurriculum");
let controladorToggle = 0;
let pageCurriculum = 0;
var curriculum1 = document.querySelector(".div-content-onlyCurriculum.content1");
var curriculum2 = document.querySelector(".div-content-onlyCurriculum.content2");
var curriculum3 = document.querySelector(".div-content-onlyCurriculum.content3");
var next = document.getElementById("next");
var play = document.querySelector(".button-play");
var tv = document.querySelector(".tv");
var divTv = document.querySelector(".div-tv")

document.getElementById("menu").addEventListener("click", function() {
    var menuContent = this.querySelector(".dropdown-content");
    menuContent.classList.toggle("active");
});

document.getElementById("only-curriculum").addEventListener("click", function(){
    displayOnlyCurriculum();
});

function displayOnlyCurriculum(){
    principal.classList.toggle("desactive");
    principal2.classList.toggle("desactive");
    onlyCurriculun.classList.toggle("active");
    if(controladorToggle == 1){
        principal.classList.toggle("active");
        principal2.classList.toggle("active");
        onlyCurriculun.classList.toggle("desactive");
        controladorToggle--;
    }
}

document.getElementById("back").addEventListener("click", function(){
    pageCurriculum--;
    if(pageCurriculum < 0){
        principal.classList.toggle("desactive");
        principal2.classList.toggle("desactive");
        onlyCurriculun.classList.toggle("active");
        principal.classList.toggle("active");
        principal2.classList.toggle("active");
        onlyCurriculun.classList.toggle("desactive");
        pageCurriculum = 0;
        controladorToggle++;
    }else if(pageCurriculum == 0){
        curriculum1.style.display = "block";
        curriculum2.style.display = "none";
    } else if(pageCurriculum == 1){
        curriculum2.style.display = "block";
        curriculum3.style.display = "none";
        next.style.display = "block";
    }
});

next.addEventListener("click", function(){
    pageCurriculum++;
    if(pageCurriculum == 1){
        curriculum1.style.display = "none";
        curriculum2.style.display = "block";
    }else if(pageCurriculum == 2){
        curriculum2.style.display = "none";
        curriculum3.style.display = "block";
        next.style.display = "none";
    }
});


play.addEventListener("click", function(){
    tv.classList.toggle("game-active");
    divTv.classList.toggle("game-active");
    play.style.display = "none";
    document.querySelector("#tablero").style.display = "block";
    document.querySelector(".home").style.display = "block";
    document.querySelector(".back-game").style.display = "block";
    document.querySelector(".next-level").style.display = "none";
    document.querySelector(".light-content1").style.display = "none";
    document.querySelector(".light-content2").style.display = "block";
    game();
});


var tablero = document.querySelector("#tablero");
var contexto = tablero.getContext("2d");
contexto.fillStyle = "blue";
var horizontal = 10;
var vertical = 5;
const caballero = new Image();
caballero.src = "/src/img/caballero.png";
const caballeroRight = new Image();
caballeroRight.src = "/src/img/caballero-mirada-derecha.png";
const caballeroLeft = new Image();
caballeroLeft.src = "/src/img/caballero-mirada-izquierda.png";
const cofre = new Image();
cofre.src = "/src/img/cofre.png";
const paredes = new Image();
paredes.src = "/src/img/paredes-mazmorra.jpg";
const suelo = new Image();
suelo.src = "/src/img/suelo-mazmorra.jpg";
var level = 1;
var level1 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," ","#","X"],
    ["X"," ","X","X","X","X","X","X","X","X"],
    ["X"," ","X","X","X","X","X","X","X","X"],
    ["X","!","X","X","X","X","X","X","X","X"]
];
var posPersonLevel1 = [4,1];
var level2 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," ","#","X"],
    ["X"," ","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," ","!","X"],
    ["X","X","X","X","X","X","X","X","X","X"]
];
var posPersonLevel2 = [3,8];
var level3 = [
    ["X","X","X"," "," "," ","X","X","X","X"],
    ["X","!","X"," ","X"," ","X"," ","#","X"],
    ["X"," ","X"," ","X"," ","X"," ","X","X"],
    ["X"," ","X"," ","X"," ","X"," ","X","X"],
    ["X"," "," "," ","X"," "," "," ","X","X"]
];
var posPersonLevel3 = [1,1];
var level4 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," ","#","X"],
    ["X"," ","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," "," ","X"],
    ["X","X","X","X","X","X","X","X","!","X"]
];
var posPersonLevel4 = [4,8];
var level5 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X","#"," "," "," "," "," "," "," ","X"],
    ["X"," ","X","X","X","X","X","X"," ","X"],
    ["X"," "," "," "," "," "," "," "," ","X"],
    ["X","X","X","X","X","X","X","X","!","X"]
];
var posPersonLevel5 = [4,8];
var level6 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," "," ","X"],
    ["X"," ","X","X","X","X","X","X"," ","X"],
    ["X"," "," "," "," ","#","X"," "," ","X"],
    ["X","X","X","X","X","X","X","X","!","X"]
];
var posPersonLevel6 = [4,8];
var level7 = [
    ["X","X","X","X","X","X","X","X","X","X"],
    ["X"," "," "," "," "," "," "," "," ","X"],
    ["X"," ","X","X","X","X","X","X"," ","X"],
    ["X"," ","X"," "," ","#","X","X"," ","X"],
    ["X"," "," "," ","X","X","X","X","!","X"]
];
var posPersonLevel7 = [4,8];
var posPerson = posPersonLevel1;
var levelMap = level1;

document.addEventListener('keydown', function(event) {
    let tecla = event.key.toLowerCase();
    if (tecla == 'w') {
      if((posPerson[0]-1) > -1 && levelMap[posPerson[0]-1][posPerson[1]] != 'X'){
        if(levelMap[posPerson[0]-1][posPerson[1]] == '#') {
            document.querySelector(".next-level").style.display = "block";
        }else{
            movimentJugadorWS(posPerson,levelMap,1, caballero, 0);
        }
      } 
    } else if (tecla == 'a') {
        if((posPerson[1]-1) > -1 && levelMap[posPerson[0]][posPerson[1]-1] != 'X'){
            if(levelMap[posPerson[0]][posPerson[1]-1] == '#') {
                document.querySelector(".next-level").style.display = "block";
            }else{
                movimentJugadorAD(posPerson,levelMap,1,caballeroRight, 0);
            }
        } 
    } else if (tecla == 's') {
        if((posPerson[0]+1) < vertical && levelMap[posPerson[0]+1][posPerson[1]] != 'X'){
            if(levelMap[posPerson[0]+1][posPerson[1]] == '#') {
                document.querySelector(".next-level").style.display = "block";
            }else{
                movimentJugadorWS(posPerson,levelMap,-1, caballeroLeft, 10);
            }
        } 
    } else if (tecla == 'd') {
        if((posPerson[1]+1) < horizontal && levelMap[posPerson[0]][posPerson[1]+1] != 'X'){
            if(levelMap[posPerson[0]][posPerson[1]+1] == '#') {
                if( level == 7){
                    document.querySelector(".projects-buttton").style.display = "block";
                }else{
                    document.querySelector(".next-level").style.display = "block";
                }
            }else{
                movimentJugadorAD(posPerson,levelMap,-1,caballeroLeft, 10);
            }
        } 
    }
});

document.querySelector(".projects-buttton").addEventListener("click", function(){
    pageCurriculum--;
    displayOnlyCurriculum();
    curriculum1.style.display = "none";
    curriculum3.style.display = "block";
    next.style.display = "none";
    document.querySelector(".projects-buttton").style.display = "none";
});

function whoLevelIts(){
    if(level == 1){
        posPerson = posPersonLevel1;
        levelMap = level1;
        document.querySelector(".light-content2").style.display = "block";
        document.querySelector(".light-content3").style.display = "none";
        console.log(1);
    } else if(level == 2){
        posPerson = posPersonLevel2;
        levelMap = level2;
        document.querySelector(".light-content2").style.display = "none";
        document.querySelector(".light-content3").style.display = "block";
        document.querySelector(".light-content4").style.display = "none";
        console.log(2);
    } else if(level == 3){
        posPerson = posPersonLevel3;
        levelMap = level3;
        document.querySelector(".light-content3").style.display = "none";
        document.querySelector(".light-content4").style.display = "block";
        document.querySelector(".light-content5").style.display = "none";
    } else if(level == 4){
        posPerson = posPersonLevel4;
        levelMap = level4;
        document.querySelector(".light-content4").style.display = "none";
        document.querySelector(".light-content5").style.display = "block";
        document.querySelector(".light-content6").style.display = "none";
    } else if(level == 5){
        posPerson = posPersonLevel5;
        levelMap = level5;
        document.querySelector(".light-content5").style.display = "none";
        document.querySelector(".light-content6").style.display = "block";
        document.querySelector(".light-content7").style.display = "none";
    } else if(level == 6){
        posPerson = posPersonLevel6;
        levelMap = level6;
        document.querySelector(".light-content6").style.display = "none";
        document.querySelector(".light-content7").style.display = "block";
        document.querySelector(".light-content8").style.display = "none";
    } else if(level == 7){
        document.querySelector(".light-content7").style.display = "none";
        document.querySelector(".light-content8").style.display = "block";
        posPerson = posPersonLevel7;
        levelMap = level7;
    }
}

function movimentJugadorWS(posPerson,levelMap,moviment,caballeroImg,gwPlus){
    contexto.clearRect(posPerson[1] * gw, posPerson[0] * gh, gw, gh);
    contexto.drawImage(suelo,posPerson[1] * gw, posPerson[0] * gh, gw, gh);
    levelMap[posPerson[0]][posPerson[1]] = " ";
    posPerson[0] = posPerson[0] - moviment;
    levelMap[posPerson[0]][posPerson[1]] = "!";
    contexto.drawImage(caballeroImg,(posPerson[1] * gw) - gwPlus, posPerson[0] * gh, gw + 10, gh + 15.6);
}

function movimentJugadorAD(posPerson,levelMap,moviment,caballeroImg, gwPlus){
    contexto.clearRect(posPerson[1] * gw, posPerson[0] * gh, gw, gh);
    contexto.drawImage(suelo,posPerson[1] * gw, posPerson[0] * gh, gw, gh);
    levelMap[posPerson[0]][posPerson[1]] = " ";
    posPerson[1] = posPerson[1] - moviment;
    levelMap[posPerson[0]][posPerson[1]] = "!";
    contexto.drawImage(caballeroImg,(posPerson[1] * gw) - gwPlus, posPerson[0] * gh, gw + 10, gh + 15.6);
}


document.querySelector(".next-level").addEventListener("click", function(){
    contexto.clearRect(0, 0, tablero.width, tablero.height);
    document.querySelector(".next-level").style.display = "none";
    level = level + 1;
    whoLevelIts();
    pintarTablero();
});

document.querySelector(".back-game").addEventListener("click", function(){
    contexto.clearRect(0, 0, tablero.width, tablero.height);
    level = level - 1;
    if(level == 0){
        undisplayGame();
        level = 1;      
    }else{
        whoLevelIts();
        pintarTablero();
    }
});

function undisplayGame(){
    tv.classList.toggle("game-active");
    divTv.classList.toggle("game-active");
    play.style.display = "block";
    document.querySelector("#tablero").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.querySelector(".back-game").style.display = "none";
    document.querySelector(".next-level").style.display = "none";
    document.querySelector(".projects-buttton").style.display = "none";
    contexto.clearRect(0, 0, tablero.width, tablero.height);
    document.querySelector(".light-content1").style.display = "block";
    document.querySelector(".light-content2").style.display = "none";
    document.querySelector(".light-content3").style.display = "none";
    document.querySelector(".light-content4").style.display = "none";
    document.querySelector(".light-content5").style.display = "none";
    document.querySelector(".light-content6").style.display = "none";
    document.querySelector(".light-content7").style.display = "none";
    document.querySelector(".light-content8").style.display = "none";
}
var gw = 0;
var gh = 0;
function game(){
    gw = (tablero.getBoundingClientRect().width / horizontal) - 1.6;
    gh = (tablero.getBoundingClientRect().height / vertical) - 15.6;
    pintarTablero();
}

function pintarTablero(){
    let y = 0;
    for(let i = 0; i < vertical; i++){
        pintarFila(i,y);
        y = y + gh;
    }
}

function pintarFila(i, y) {
    let x = 0;
    for (let j = 0; j < horizontal; j++) {
        if (levelMap[i][j] == "X") {
            contexto.drawImage(paredes, x, y, gw, gh); 
        }else {
            contexto.drawImage(suelo, x, y, gw, gh); 
            if (levelMap[i][j] == "!") {
                contexto.drawImage(caballero, x, y, gw + 10, gh + 15.6); 
            } else if (levelMap[i][j] == "#") {
                contexto.drawImage(cofre, x, y, gw + 10, gh); 
            } 
        }
        contexto.rect(x, y, gw, gh);
        x = x + gw;
    }
}



document.querySelector(".home").addEventListener("click", function(){
    undisplayGame();
});