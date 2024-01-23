const inquirer = require("inquirer");
// const asciiart = require("asciiart-logo");
const connection = require("mysql2");
const asciiart = require("./utils/asciiart");
const questions = require("./inquirer/inquirer");
const topMenuChoices = ["View all departments","View all roles",
                        "View all employees","Add a department",
                        "Add a role","Add an employee",
                        "Update an employee","Quit"];



async function startCLI() {
    console.log({ message: "starting CLI"});

    let userChoice;

    do {
        const answers = await inquirer.prompt([topMenuChoices])
    }


    
}

function init(){
    asciiart.generateAsciiArt();
    startCLI();
}

init();