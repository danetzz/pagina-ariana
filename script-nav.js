
// RESPONSIVE MENÚ HAMBURGUESA
// Obtenemos los elementos
function abrirHamburguesa() {

    const hamburger = document.getElementById('hamburgesa');
    const menuHamburguesa = document.getElementById('listadoHamburguesa');
    if(
         menuHamburguesa.style.display == "block"

    ) {
        menuHamburguesa.style.display = "none";

    }
    else {
    menuHamburguesa.style.display = "block"; // Alternamos la clase 'show' para abrir/cerrar el menú
    console.log("Boton presionado");
}}
