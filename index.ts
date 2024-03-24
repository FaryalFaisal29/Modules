import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"
}]);

console.log(chalk.red("In Sha Allah, in "+(60 - answer.age)+"years you will be 60 years old."));

console.log(chalk.green("Hello,")+chalk.blue("World"));

console.log(chalk.red.bold("This is an Error message!"));
