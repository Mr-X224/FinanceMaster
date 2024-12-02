// Récupération des éléments du DOM
const form = document.getElementById('retirement-form');
const calculateButton = document.getElementById('calculate-button');
const saveScenarioButton = document.getElementById('save-scenario');
const resultDiv = document.getElementById('result');
const savedScenarios = document.getElementById('saved-scenarios');

// Fonction de calcul
function calculateSavings() {
  const currentAge = parseInt(document.getElementById('current-age').value);
  const retirementAge = parseInt(document.getElementById('retirement-age').value);
  const goalAmount = parseFloat(document.getElementById('goal-amount').value);
  const initialSavings = parseFloat(document.getElementById('initial-savings').value);
  const growthRate = parseFloat(document.getElementById('growth-rate').value) / 100;

  // Vérification des entrées
  if (retirementAge <= currentAge) {
    resultDiv.innerText = 'L’âge de départ à la retraite doit être supérieur à l’âge actuel.';
    return;
  }

  // Calcul
  const yearsToSave = retirementAge - currentAge;
  const monthsToSave = yearsToSave * 12;
  const monthlyRate = growthRate / 12;

  let futureSavings = initialSavings * Math.pow(1 + monthlyRate, monthsToSave);
  const remainingAmount = goalAmount - futureSavings;

  // Si un montant reste à économiser
  let monthlySavings = 0;
  if (remainingAmount > 0) {
    monthlySavings = remainingAmount / ((Math.pow(1 + monthlyRate, monthsToSave) - 1) / monthlyRate);
  }

  // Affichage du résultat
  if (remainingAmount <= 0) {
    resultDiv.innerText = `Félicitations ! Vous avez déjà atteint votre objectif d'épargne avec ${initialSavings} MAD.`;
  } else {
    resultDiv.innerText = `Vous devez économiser environ ${monthlySavings.toFixed(2)} MAD par mois pour atteindre ${goalAmount} MAD d'ici ${retirementAge} ans.`;
  }
}

// Sauvegarder un scénario
function saveScenario() {
  const currentAge = document.getElementById('current-age').value;
  const retirementAge = document.getElementById('retirement-age').value;
  const goalAmount = document.getElementById('goal-amount').value;
  const initialSavings = document.getElementById('initial-savings').value;
  const growthRate = document.getElementById('growth-rate').value;

  const scenarioText = `Âge actuel : ${currentAge}, Âge de retraite : ${retirementAge}, Objectif : ${goalAmount} MAD, Épargne initiale : ${initialSavings} MAD, Taux de croissance : ${growthRate}%`;
  const li = document.createElement('li');
  li.innerText = scenarioText;
  savedScenarios.appendChild(li);
}

// Ajout des événements
calculateButton.addEventListener('click', calculateSavings);
saveScenarioButton.addEventListener('click', saveScenario);
