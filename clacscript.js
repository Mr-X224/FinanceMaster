// Sélection des éléments HTML
const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const calculateButton = document.getElementById('calculate-button');
const resultIncome = document.getElementById('result-income');
const resultExpenses = document.getElementById('result-expenses');
const resultBalance = document.getElementById('result-balance');
const returnButton = document.getElementById('return-button');

// Fonction pour calculer le budget
calculateButton.addEventListener('click', function () {
    const income = parseFloat(incomeInput.value) || 0;
    const expenses = parseFloat(expensesInput.value) || 0;
    const balance = income - expenses;

    resultIncome.textContent = income.toFixed(2);
    resultExpenses.textContent = expenses.toFixed(2);
    resultBalance.textContent = balance.toFixed(2);

    // Appliquer une classe selon le solde
    if (balance >= 0) {
        resultBalance.className = 'positive';
    } else {
        resultBalance.className = 'negative';
    }
});

// Fonction pour rediriger vers le site principal
returnButton.addEventListener('click', function () {
    window.location.href = "index.html"; // Remplacez "index.html" par l'URL de votre page principale
});
