// Get DOM elements
const incomeInput = document.querySelector('.income input');
const incomeList = document.getElementById('income-list');
const totalIncome = document.getElementById('total-income');
const expenseInput = document.querySelector('.expenses input');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');
const remainingBudget = document.getElementById('remaining-budget');

// Initialize budget values
let budget = 0;
let income = 0;
let expenses = 0;

// Function to update budget values and DOM
function updateBudget() {
  remainingBudget.textContent = budget;
  totalIncome.textContent = income;
  totalExpenses.textContent = expenses;
}

// Event listener for adding income
document.querySelector('.income button').addEventListener('click', function() {
  const incomeValue = parseFloat(incomeInput.value);
  if (!isNaN(incomeValue) && incomeValue > 0) {
    incomeList.innerHTML += `<li>+ $${incomeValue}</li>`;
    income += incomeValue;
    budget += incomeValue;
    incomeInput.value = '';
    updateBudget();
  }
});

// Event listener for adding expenses
document.querySelector('.expenses button').addEventListener('click', function() {
  const expenseValue = parseFloat(expenseInput.value);
  if (!isNaN(expenseValue) && expenseValue > 0) {
    expenseList.innerHTML += `<li>- $${expenseValue}</li>`;
    expenses += expenseValue;
    budget -= expenseValue;
    expenseInput.value = '';
    updateBudget();
  }
});
