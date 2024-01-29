// --- Evento preventDefault  --- //
// Llamamos al ID del botón enviar para que con el evento del
// preventDefault, no pueda hacer que el btón funcione como normalmente lo haría.
// De ese modo evitamos que el formulario envíe la información y nos redirecccione a otro sitio. 
let send = document.getElementById('send');
send.addEventListener("click", (e) => {
    e.preventDefault();
});


