const inquirer = require("inquirer");

function topMenu(){


    inquirer.prompt([
    {
        type:'list',
        name:'top_menu_selection',
        message:'Welcome, please make a selection or exit the app.',
        choices: topMenuChoices,
    }
])
return inquirer.prompt; 

}

function handleUserChoice(choice){
return new Promise((resolve, reject) => {
    switch(choice) {
        case topMenu[0]:
            console.log('viewing all departments');
            resolve();
            break;
 
        case topMenu[1]:
            console.log('viewing all roles');
            resolve();
            break;
    }
});
}

topMenu()
    .then((answers) => {
        const { userChoice } = answers;
        return handleUserChoice(userChoice);
    })
    .then(() => {
        console.log('operation completed');
    })
    .catch((error) => {
        console.error('error', error.message);
    });