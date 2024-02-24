
// Declarando Variables

estudios = document.getElementById("estudios");
btn_estudios_show = document.getElementById("estudios-show");
btn_estudios_hidden = document.getElementById("estudios-hidden");
cronograma = document.getElementById("cronograma");
btn_crono_show = document.getElementById("crono-show");
btn_crono_hidden = document.getElementById("crono-hidden");
btn_calendario = document.getElementById("calendario")
show_page = document.getElementById("to-welcome")

// Mostrar Estudios

document.getElementById("estudios-show").addEventListener("click", mostrarEstudios);

function mostrarEstudios() {

    estudios.style.display = "flex";
    btn_estudios_show.style.display = "none";
    btn_crono_show.style.display = "flex"
    cronograma.style.display = "none";
    
}

// Ocultar Estudios


document.getElementById("estudios-hidden").addEventListener("click", ocultarEstudios);

function ocultarEstudios() {

    estudios.style.display = "none";
    btn_estudios_show.style.display = "flex";
    btn_crono_show.style.display = "flex";
}

// Mostrar Crono

document.getElementById("crono-show").addEventListener("click", mostrarCrono);

function mostrarCrono() {
    
    cronograma.style.display = "flex";
    btn_crono_show.style.display = "none";
    btn_estudios_show.style.display = "flex"
    estudios.style.display = "none";
}

// Ocultar Crono


document.getElementById("crono-hidden").addEventListener("click", ocultarCrono);

function ocultarCrono() {

    cronograma.style.display = "none";
    btn_estudios_show.style.display = "flex";
    btn_crono_show.style.display = "flex";
}

// Btn Calendario 

document.getElementById("calendario").addEventListener("click", mostrarInicio);

function mostrarInicio () {

    cronograma.style.display = "none";
    estudios.style.display = "none";
    btn_estudios_show.style.display = "flex";
    btn_crono_show.style.display = "flex";
}

// Mostrar Pagina

document.getElementById("to-welcome-showpage").addEventListener("click", mostrarIndex);

function mostrarIndex() {
    
    show_page.style.display = "none"

}