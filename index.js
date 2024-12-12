import chalk from 'chalk';

console.log(chalk.blue('It works'))

let myUnusedVariable = 42; // Fehler: 'myUnusedVariable' ist deklariert, wird aber nicht verwendet (no-unused-vars)

if (myUnusedVariable == '42') { // Fehler: Es wird '==' anstelle von '===' verwendet (eqeqeq)
  console.log('This will not run');
}
