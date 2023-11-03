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
    principal.classList.toggle("desactive");
    principal2.classList.toggle("desactive");
    onlyCurriculun.classList.toggle("active");
    if(controladorToggle == 1){
        principal.classList.toggle("active");
        principal2.classList.toggle("active");
        onlyCurriculun.classList.toggle("desactive");
        controladorToggle--;
    }
});

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
    document.querySelector(".next-level").style.display = "block";
    setTimeout(game(), 10000);
});
const tablero = document.querySelector("#tablero");
const contexto = tablero.getContext("2d");
const horizontal = 10;
const vertical = 5;


function game(){
    let gw = (tablero.getBoundingClientRect().width / horizontal) - 1.6;
    let gh = (tablero.getBoundingClientRect().height / vertical) - 15.6;
    pintarTablero(gw,gh)

}

function pintarTablero(gw,gh){
    contexto.fillStyle = "black";
    contexto.lineWidth = 1;
    let y = 0;
    for(let i = 0; i < vertical; i++){
        pintarFila(y,gw,gh);
        y = y + gh;
    }
}

function pintarFila(y,gw,gh){
    let x = 0;
    for(let j = 0; j < horizontal; j++){
        contexto.rect(x,y,gw,gh);
        contexto.stroke();
        x = x + gw;
    }
}



document.querySelector(".home").addEventListener("click", function(){
    tv.classList.toggle("game-active");
    divTv.classList.toggle("game-active");
    play.style.display = "block";
    document.querySelector("#tablero").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.querySelector(".back-game").style.display = "none";
    document.querySelector(".next-level").style.display = "none";
});