// --- Comienza Boton Scroll Up ---
// Este primer bloque de código toma el botón que hemos creado con el ID
// del HTML, si el botón tiene una posición mayor a zero, 
// se agrega el evento de que cuando el usuario haga click en el botón,
// suba a una velocidad fraccionada del 20%, en relación a la posición en la que

document.getElementById('btnUp').addEventListener('click', ScrollUp);

function ScrollUp() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(ScrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
    }
};


// En el siguiente bloque de código el botón no es visible hasta que el usuario llega a una distancia de 500px y vuelve
// a desaparecer si regresa a la posición inicial.
let buttonUp = document.getElementById('btnUp');
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 500) {
        buttonUp.style.transform = 'scale(1)';
    } else if(scroll < 500) {
        buttonUp.style.transform = 'scale(0)';
    }
};