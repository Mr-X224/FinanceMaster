// Sélection des éléments HTML
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expensesList = document.getElementById('expenses');
const totalAmountDisplay = document.getElementById('total-amount');
const exportPdfButton = document.getElementById('export-pdf');

// Variable pour stocker les dépenses
let totalAmount = 0;

// Fonction pour ajouter une dépense
document.getElementById('add-expense-button').addEventListener('click', function () {
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    // Vérification des valeurs saisies
    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Veuillez saisir un nom valide et un montant supérieur à 0.');
        return;
    }

    // Mise à jour du total
    totalAmount += expenseAmount;

    // Ajout de l'élément dans la liste
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${expenseName} <span>${expenseAmount.toFixed(2)} MAD</span>
        <button class="delete-expense">Supprimer</button>
    `;

    // Ajouter un bouton pour supprimer la dépense
    listItem.querySelector('.delete-expense').addEventListener('click', function () {
        totalAmount -= expenseAmount;
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
        expensesList.removeChild(listItem);
    });

    expensesList.appendChild(listItem);

    // Mise à jour du total affiché
    totalAmountDisplay.textContent = totalAmount.toFixed(2);

    // Réinitialisation des champs de formulaire
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});

// Fonction pour exporter les dépenses en PDF
exportPdfButton.addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text('Liste des Dépenses', 10, 10);

    let y = 20; // Position initiale pour écrire
    Array.from(expensesList.children).forEach((item) => {
        pdf.text(item.textContent.replace('Supprimer', '').trim(), 10, y);
        y += 10;
    });

    pdf.text(`Total : ${totalAmount.toFixed(2)} MAD`, 10, y + 10);

    // Télécharger le fichier PDF
    pdf.save('suivi_des_depenses.pdf');
});
