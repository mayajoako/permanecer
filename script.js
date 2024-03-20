
// Selectores
const body = document.querySelector("body");
const btnMode = document.querySelector("#btn-mode");
const btnPrimary = document.querySelector(".btn");
const title = document.querySelector("h1");
const darkBox = document.querySelector(".darkBox");
const showAct = document.querySelector(".actividades");
const showActPar = document.querySelector(".actividades p");
const cronoDark = document.querySelector(".cronograma--table");
const cronograma = document.querySelector("#cronograma");
const estudios = document.querySelector("#estudios");
const estudiosTitleDark = document.querySelector(".estudios-title");
const footer = document.querySelector(".footer");
const showSpotify = document.querySelector("#redes-items-spotify");
const spotify = document.querySelector(".spotify");

// BOTONES MOSTRAR
const cronoShow = document.querySelector(".cronoShow");
const estudiosShow = document.querySelector(".estudiosShow");
const musicosShow = document.querySelector(".musicosShow");

// BOTONES OCULTAR
const cronoHidden = document.querySelector(".cronoHidden");
const estudiosHidden = document.querySelector(".estudiosHidden");



// Dark Mode

btnMode.addEventListener("click", () => {
    body.classList.toggle("dark");
    darkBox.classList.toggle("dark-box");
    cronoDark.classList.toggle("cronoDark");
    estudios.classList.toggle("estudiosDark");
    estudiosTitleDark.classList.toggle("estudiosTitleDark");
    footer.classList.toggle("dark-footer");
    cronoShow.classList.toggle("btnDark");
    estudiosShow.classList.toggle("btnDark");
    cronoHidden.classList.toggle("btnDark");
    estudiosHidden.classList.toggle("btnDark");

    if(body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "enabled")
    }
    else {
        localStorage.setItem("dark-mode", "disabled")
    }
})

if (localStorage.getItem("dark-mode")=="enabled") {
    body.classList.toggle("dark");
    darkBox.classList.toggle("dark-box");
    cronoDark.classList.toggle("cronoDark");
    estudios.classList.toggle("estudiosDark");
    estudiosTitleDark.classList.toggle("estudiosTitleDark");
    footer.classList.toggle("dark-footer");
    cronoShow.classList.toggle("btnDark");
    estudiosShow.classList.toggle("btnDark");
    cronoHidden.classList.toggle("btnDark");
    estudiosHidden.classList.toggle("btnDark");
}
else {
    localStorage.getItem("dark-mode", "disabled")
}


// TITULO DE LA PÁGINA

title.innerHTML = "Permanecer 2k";

// Mostrar Actividades
showAct.addEventListener("click", () => {
    showActPar.classList.toggle("actividadHidden");
    showAct.classList.toggle("actividad_red");
    showActPar.classList.toggle("actividadShow")
})

// Cronograma

cronoShow.addEventListener("click", () => {
    cronograma.style.display="flex"
    estudios.style.display="none"

})

cronoHidden.addEventListener("click", () => {
    cronograma.style.display="none";
})

// Estudios

estudiosShow.addEventListener("click", () => {
    estudios.style.display="flex"
    cronograma.style.display="none"
})

estudiosHidden.addEventListener("click", () => {
    estudios.style.display="none"
})

// Spotify 

showSpotify.addEventListener("click", () => {
    spotify.style.display= "block"
    body.classList.toggle("filter-body")
})

