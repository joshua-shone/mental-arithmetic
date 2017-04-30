var pastFormulasElement   = document.getElementById('past-formulas');
var currentFormulaElement = document.getElementById('current-formula');
var solutionForm          = document.getElementById('solution-form');
var solutionInput         = document.getElementById('solution-input');

var currentFormula = null;
var currentFormulaSolution = null;

function generateRandomFormula() {
  var a = getRandomInt(2, 13);
  var b = getRandomInt(2, 13);
  return {
    formula: a + ' x ' + b,
    solution: a * b,
  }
}

var randomFormula = generateRandomFormula();
currentFormula = randomFormula.formula;
currentFormulaSolution = randomFormula.solution;
currentFormulaElement.textContent = currentFormula;

solutionForm.addEventListener('submit', event => {
  event.preventDefault();
  
  if (solutionInput.value.length === 0) {
    solutionInput.focus();
    return;
  }
  
  var answer = parseInt(solutionInput.value);
  var isAnswerCorrect = answer === currentFormulaSolution;
  
  var pastFormulaElement = document.createElement('div');
  pastFormulaElement.textContent = currentFormula + ' = ' + answer;
  pastFormulaElement.classList.add('past-formula');
  pastFormulaElement.classList.toggle('correct',    isAnswerCorrect);
  pastFormulaElement.classList.toggle('incorrect', !isAnswerCorrect);
  pastFormulasElement.appendChild(pastFormulaElement);
  pastFormulaElement.scrollIntoView(false);
  
  if (isAnswerCorrect) {
    var randomFormula = generateRandomFormula();
    currentFormula = randomFormula.formula;
    currentFormulaSolution = randomFormula.solution;
    currentFormulaElement.textContent = currentFormula;
    solutionInput.value = '';
    solutionInput.focus();
  } else {
    alert('false!');
    solutionInput.value = '';
  }
  return false;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}