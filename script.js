
// Selectores
const body = document.querySelector("body");
const main = document.querySelector("main");
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
const redesSpotify = document.querySelector(".redes-items-spotify");
const spotify = document.querySelector(".spotifyShow");
const redesIG = document.querySelector(".redes-items-ig")
const redesFB = document.querySelector(".redes-items-fb")
const redesYT = document.querySelector(".redes-items-yt")

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
    redesIG.classList.toggle("redes-items-dark");
    redesFB.classList.toggle("redes-items-dark");
    redesSpotify.classList.toggle("redes-items-dark");
    redesYT.classList.toggle("redes-items-dark");

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
    redesIG.classList.toggle("redes-items-dark");
    redesFB.classList.toggle("redes-items-dark");
    redesSpotify.classList.toggle("redes-items-dark");
    redesYT.classList.toggle("redes-items-dark");
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
    estudios.style.display="flex";
    cronograma.style.display="none";
})

estudiosHidden.addEventListener("click", () => {
    estudios.style.display="none";
})

// Spotify 

redesSpotify.addEventListener("click", () => {
    spotify.style.display="block";
    main.style.display="none";
})

spotify.addEventListener("click", () => {
    spotify.style.display="none";
    main.style.display="flex";
})

