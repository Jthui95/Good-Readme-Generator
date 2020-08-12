const inquirer = require("inquirer");
const fs = require('fs');

const questions = inquirer.prompt([
{
    type: 'input',
    message: 'What would you like to name your read me file?',
    name:'Title',


},
{
    type: 'input',
    message: 'Please Write a Description for your read me file.',
    name: 'description', 
},
{
    type: 'input',
    message:"Please list out your table of contents.",
    name: 'contents'
},
{
    type: 'input',
    message: 'Please tell the user how they would use your application.',
    name:'usage',
},
{
    type:'input',
    message:'Please add a license if applicable if not skip this.',
    name:'license',
},
{
    type:'input',
    message:'Please tell us whether or not you would like others to contribute to your code. If so what should they do?',
    name:'contributing',
},
{
    type:'input',
    message:'',
    name:'tests',
},
{
    type:'list',
    message:"Please input your Github profile picture and GitHub Email",
    name:'questions',
    choices:[
        'profile picture',
        'github email',
    ] 
    
},

]);

function writeToFile(fileName, data) {

    fs.writeFile
}

function init() {

}

init();
