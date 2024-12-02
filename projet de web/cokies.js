function getCookie(email) {
    let gmail = email + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(gmail) === 0) {
            return c.substring(gmail.length);
        }
    }
    return "";
}

function setCookie(email, valeur, jours) {
    let d = new Date();
    d.setTime(d.getTime() + (jours * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${email}=${valeur};${expires};path=/`;
}

function afficherCookies() {
    alert(document.cookie);
}

function initialiserPage() {
    let email = getCookie("email");
    let visites = getCookie("visites");
    let derniereVisite = getCookie("derniereVisite");

    if (nom !== "") {
        document.getElementById("messageBienvenue").innerText = `votre email ${email} !`;
        document.getElementById("visites").innerText = `Vous avez visité cette page ${visites} fois.`;
        document.getElementById("derniereVisite").innerText = `Dernière visite : ${derniereVisite}`;
        setCookie("visites", parseInt(visites || 0) + 1, 100);
        setCookie("derniereVisite", new Date().toLocaleString(), 100);
    } else {
        document.getElementById("messageBienvenue").innerText = "Bienvenue !";
        document.getElementById("formulaire").style.display = "block";
    }
}
document.getElementById("formulaire").onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let visites = getCookie("visites") ? parseInt(getCookie("visites")) : 0;

    setCookie("email", email, 100);
    setCookie("visites", visites + 1, 100);
    setCookie("derniereVisite", new Date().toLocaleString(), 100);


    location.reload();
};

// Initialisation de la page au chargement
initialiserPage();
// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// Afficher un message de bienvenue avec le nom de l'utilisateur
if (name) {
    document.getElementById("welcome-message").innerText = "Bonjour " + decodeURIComponent(name) + "!";
}
