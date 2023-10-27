document.getElementById("menu").addEventListener("click", function() {
    var menuContent = this.querySelector(".dropdown-content");
    menuContent.classList.toggle("active");
});