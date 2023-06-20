const btnMenu = document.querySelector(".btmMenu");
const menuNav = document.querySelector(".menu");
const footer = document.querySelector("footer")

// Abrir cerrar nav
btnMenu.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

// Cerrar al dar click en link
document.querySelectorAll("nav-links").forEach(
  (link) => link.addEventListener("click"),
  () => {
    menuNav.classList.remove("active");
  }
);

// Botón seleccionado
var botones = menuNav.getElementsByClassName("nav-links");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    var select = document.getElementsByClassName("active");
    select[0].className = select[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Ir a incio
const subir = document.querySelector(".subir");
subir.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Enviar correo