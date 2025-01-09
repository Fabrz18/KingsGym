window.addEventListener("resize", function () {
    const element1 = document.getElementById("Gyms");
    const element2 = document.getElementById("Reservations");
    const inscribete = document.getElementById("Inscribite");
    const logo = document.getElementById("logoIco");
    const ulLogo = document.getElementById("principal-navigationId");

    if (window.innerWidth <= 650) {
        element1.style.display = "none";
        element2.style.display = "none";
    } else {
        element1.style.display = "";
        element2.style.display = "";
    }

    if (window.innerWidth <= 500) {
        inscribete.style.fontSize = "15px";
        ulLogo.style.gap = "0px";
        console.log("ESTAMOS EN -500px MI GENTE");
    } else {
        inscribete.style.fontSize = "";
        ulLogo.style.gap = "";
    }

    if (window.innerWidth <= 360) {
        logo.style.display = "none";
        
    } else {
        logo.style.display = "";
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const element1 = document.getElementById("Gyms");
    const element2 = document.getElementById("Reservations");
    const inscribete = document.getElementById("Inscribite");
    const logo = document.getElementById("logoIco");
    const ulLogo = document.getElementById("principal-navigationId");

    if (window.innerWidth <= 650) {
        element1.style.display = "none";
        element2.style.display = "none";
    } else {
        element1.style.display = "";
        element2.style.display = "";
    }

    if (window.innerWidth <= 500) {
        inscribete.style.fontSize = "15px";
        ulLogo.style.gap = "0px";
        console.log("ESTAMOS EN -500px MI GENTE");
    } else {
        inscribete.style.fontSize = "";
        ulLogo.style.gap = "";
    }

    if (window.innerWidth <= 360) {
        logo.style.display = "none";
        
    } else {
        logo.style.display = "";
    }
});