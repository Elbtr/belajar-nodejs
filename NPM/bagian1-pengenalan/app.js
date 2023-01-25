const validator = require('validator');
const chalk = require('chalk')


// console.log(validator.isEmail('bebecok75@gmail.com'));
// console.log(validator.isMobilePhone('082315534435','id-ID'));
// console.log(validator.isNumeric('082315534a435'));
// console.log(chalk.blue('Hello World'));
console.log(chalk.italic.blue.bgRed.bold('Hello world!'));
const pesan = chalk`Lorem ipsum dolor {bgRed sit amet} consectetur adipisicing elit. italic Sapiente ullam unde sint?`
console.log(pesan);
// console.log(chalk.bgCyan.black(pesan));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
