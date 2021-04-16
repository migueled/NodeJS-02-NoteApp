/*
Challenge: Use the chalk library in you project
    1.- Install version 2.4.1 of chalk
    2.- Lood chalk info app.js
    3.- Use it to print the string "Success" to the console in green
    4.- Test your work

    Bonus: Use docs to mess around with other styles. Make text bold and inversed
*/

const chalk = require('chalk');
 
const msg = 'Success';
const styleMsg = chalk.white.bold.bgGreen( msg );

console.log( styleMsg );