const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');

function prompt(messageName) {
  console.log(`=> ${MESSAGES[messageName]}`);
}

function getInput(messageName) {
  prompt(messageName);
  return readline.question();
}

function invalidInput(number, inputType) {
  let notPositiveNumber = (number.trimStart() === '') || isNaN(number)
    || number <= 0;
  let aprTooLarge = inputType === 'APR' && number > 100;
  return notPositiveNumber || aprTooLarge;
}

function getInputAndValidate(inputType) {
  let value = getInput(inputType);
  while (invalidInput(value, inputType)) {
    let messageName = inputType === 'APR' ? 'invalidAPR' : 'invalidInput';
    prompt(messageName);
    value = getInput(inputType);
  }
  return value;
}

function calculateAndDisplay(loanAmount, apr, loanDurationInMonths) {
  let monthlyInterest = apr / 12 / 100;
  let monthlyPayment = loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, (-1 * loanDurationInMonths)))
    );
  console.clear();
  console.log(`Loan Amount: $${loanAmount.toFixed(2)}`);
  console.log(`APR: ${apr.toFixed(2)}%`);
  console.log(`Loan Duration: ${loanDurationInMonths} months`);
  console.log(`> Monthly Payment: $${monthlyPayment.toFixed(2)} <\n`);
}

prompt('welcome');

let again;
do {
  let loanAmount = Number(getInputAndValidate('loanAmount'));
  let apr = Number(getInputAndValidate('APR'));
  let loanDurationInMonths = Number(getInputAndValidate('durationInMonths'));
  calculateAndDisplay(loanAmount, apr, loanDurationInMonths);
  while (true) {
    again = getInput('again').toLowerCase();
    if (again === 'y' || again === 'n') {
      break;
    }
    prompt('invalidAgain');
  }
  console.clear();
} while (again === 'y');

prompt('bye');