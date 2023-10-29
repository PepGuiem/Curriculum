document.getElementById("menu").addEventListener("click", function() {
    var menuContent = this.querySelector(".dropdown-content");
    menuContent.classList.toggle("active");
});

document.getElementById("only-curriculum").addEventListener("click", function(){
    var principal = document.querySelector(".div-content");
    var onlyCurriculun = document.querySelector(".div-content2");
    principal.classList.toggle("desactive");
    onlyCurriculun.classList.toggle("active");
});