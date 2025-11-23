
console.log("✅ main.js cargado");

// Esperamos a que el DOM este listo
document.addEventListener('DOMContentLoaded', function () {
    console.log("✅ DOM listo");

    // CONST: elementos del DOM
    const modal = document.getElementById('modalMind');
    const btnOpenModal = document.getElementById('btnOpenModal');   
    const btnCloseModal = document.getElementById('btnCloseModal'); 
    const btnModo = document.getElementById('btnModo');             
    const mensajeModal = document.getElementById('mensajeModal');   

    console.log("modal:", modal);
    console.log("btnOpenModal:", btnOpenModal);
    console.log("btnCloseModal:", btnCloseModal);
    console.log("btnModo:", btnModo);
    console.log("mensajeModal:", mensajeModal);

    
    if (!modal || !btnOpenModal || !btnCloseModal || !btnModo || !mensajeModal) {
        console.warn(" Algún elemento no se encontró. Revisa los IDs en el HTML.");
        return;
    }

    // LET: variables que cambian
    let modoEnfoqueActivo = false;
    let clicsEnHero = 0;

    // Abrir modal al hacer clic en "open your mind"
    btnOpenModal.addEventListener('click', function (evento) {
        evento.preventDefault(); // evita recargar la página

        clicsEnHero = clicsEnHero + 1;

        if (clicsEnHero === 1) {
            mensajeModal.textContent = "Primer salto al interior de tu mente. ¿Entramos en modo enfoque?";
        } else {
            mensajeModal.textContent = "Has abierto tu mente " + clicsEnHero + " veces. ¿Seguimos enfocando?";
        }

        modal.classList.remove('oculto');
    });

    // Cerrar modal 
    btnCloseModal.addEventListener('click', function () {
        modal.classList.add('oculto');
    });

    // Cerrar modal haciendo clic
    modal.addEventListener('click', function (evento) {
        if (evento.target === modal) {
            modal.classList.add('oculto');
        }
    });

    // Activar / desactivar modo enfoque (if / else)
    btnModo.addEventListener('click', function () {
        if (modoEnfoqueActivo === false) {
            // ACTIVAR
            document.body.style.background = "#000010";
            mensajeModal.textContent = "Modo enfoque ACTIVADO. Menos ruido, más claridad.";
            btnModo.textContent = "Desactivar modo enfoque";
            modoEnfoqueActivo = true;
        } else {
            // DESACTIVAR
            document.body.style.background = "#010014";
            mensajeModal.textContent = "Modo enfoque DESACTIVADO. Vuelve cuando quieras.";
            btnModo.textContent = "Activar modo enfoque";
            modoEnfoqueActivo = false;
        }
    });
});
