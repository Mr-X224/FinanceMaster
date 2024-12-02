<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page avec Cookies</title>
</head>
<body>

    <h1 id="messageBienvenue"></h1>
    <p id="visites"></p>
    <p id="derniereVisite"></p>
    
    <form id="formulaire" style="display: none;">
        <label for="nom">Votre nom :</label>
        <input type="text" id="nom" required><br><br>

        <label for="couleur">Couleur de fond préférée :</label>
        <input type="color" id="couleur" value="#ffffff"><br><br>

        <button type="submit">Enregistrer</button>
    </form>

    <br>
    <a href="#" onclick="afficherCookies()">Afficher les cookies</a>
    <br>
    <button onclick="reinitialiserCookies()">Revenir à la page de saisie</button>

    <script>
        // Récupérer la valeur d'un cookie
        function getCookie(nom) {
            let name = nom + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let cookies = decodedCookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let c = cookies[i].trim();
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length);
                }
            }
            return "";
        }

        // Définir un cookie avec une durée d'expiration
        function setCookie(nom, valeur, jours) {
            let d = new Date();
            d.setTime(d.getTime() + (jours * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = `${nom}=${valeur};${expires};path=/`;
        }

        // Afficher tous les cookies dans une alerte
        function afficherCookies() {
            alert(document.cookie);
        }

        // Initialiser la page selon les cookies
        function initialiserPage() {
            let nom = getCookie("nom");
            let visites = getCookie("visites");
            let derniereVisite = getCookie("derniereVisite");
            let couleurPreferee = getCookie("couleur");

            if (nom !== "") {
                document.body.style.backgroundColor = couleurPreferee || "#ffffff";
                document.getElementById("messageBienvenue").innerText = `Bonjour ${nom} !`;
                document.getElementById("visites").innerText = `Vous avez visité cette page ${visites} fois.`;
                document.getElementById("derniereVisite").innerText = `Dernière visite : ${derniereVisite}`;
                setCookie("visites", parseInt(visites || 0) + 1, 100);
                setCookie("derniereVisite", new Date().toLocaleString(), 100);
            } else {
                document.getElementById("messageBienvenue").innerText = "Bienvenue !";
                document.getElementById("formulaire").style.display = "block";
            }
        }

        // Réinitialiser tous les cookies et recharger la page
        function reinitialiserCookies() {
            setCookie("nom", "", -1);
            setCookie("visites", "", -1);
            setCookie("derniereVisite", "", -1);
            setCookie("couleur", "", -1);
            location.reload();
        }

        // Gérer la soumission du formulaire
        document.getElementById("formulaire").onsubmit = function(event) {
            event.preventDefault();
            let nom = document.getElementById("nom").value;
            let couleur = document.getElementById("couleur").value;
            let visites = getCookie("visites") ? parseInt(getCookie("visites")) : 0;

            setCookie("nom", nom, 100);
            setCookie("visites", visites + 1, 100);
            setCookie("derniereVisite", new Date().toLocaleString(), 100);
            setCookie("couleur", couleur, 100);

            location.reload();
        };

        // Initialisation de la page au chargement
        initialiserPage();
    </script>

</body>
</html>
