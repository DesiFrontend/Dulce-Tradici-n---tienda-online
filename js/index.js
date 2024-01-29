// --- Comienza el Menú de Navegación Sticky ---
// El siguiente bloque de código toma la clase navBar, es decir; todo el 
// menú y le damos el evento de que se quede fijo sin importar en que posición se encuentre
// en la pantalla del navegador.
let nav = document.querySelector('.navBar');
window.addEventListener('scroll', fixNav);

// Lo que hace ésta función es pasar nuestro menú de navegación de un estado a otro.
// Es decir, empieza siendo transparente y cuando pase de subir de la posición cero de la pantalla,
// este cambiará a ser un color sólido. De acuerdo con los estilos que le dimos dese el CSS, con la 
// clase .active. Y sólo se activará cuando el usuario haga scroll hacia abajo.
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
// Termina el Menú de Navegación Sticky



// --- Comienza el SideBar del Menú de Navegación ---
// Este código lo que hace es que cuando el menú de navegación cambie a ser responsive,
// se oculte y solo muestre el botón del menú hamburguesa. Una vez que hagamos click en él,
// nos despliegue y muestre el menú de forma vertical. Volviendo hacer click sobre el mismo botón,
// el menú vuelve a replegarse, con la ayuda del toggle.
let btnBar = document.querySelector('#buttonBars');
let navBar = document.querySelector('.nav-links');

btnBar.addEventListener('click', ()=> {
    navBar.classList.toggle('active');
});
// Termina el SideBar del Menú de Navegación



// --- Comienza la Animación del Fondo de Pantalla (Slider) --- //
// Las imágenes se guardan en un array y no directamente desde el HTML,
// de ese modo creamos la función que hará que éstas se repitan en un bucle 
// y se intercalen cada 3 segundos de forma infinita.
let slideImg = document.getElementById('slideImg');

let images = [
    "../img/fondo2.png",
    "../img/fondo23.jpg",
    "../img/fondo24.jpg"
];
let len = images.length;
let i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
};

window.onload = slider();
// Termina la Animación del Fondo de Pantalla (Slider) //