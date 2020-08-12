const inquirer = require("inquirer");
const fs = require('fs');

//Inquirer prompts from User Responses
const questions = [
{
    type: 'input',
    message: 'What would you like to name your read me file?',
    name:'Title',
    default: 'readme.txt',
    validate: function(answer){
        if (answer.length < 1) {
            return console.log('A title for your read me is required.')
        } else
        return true;
    }
},
{
    type: 'input',
    message: 'Please write a description for your  file.',
    name: 'description', 
    default: 'File Descritption',
    validate: function(answer) {
        if (answer.lenght < 1) {
            return console.log("A description is requried for your read me.")
        }
    }
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
    message:'Please add a license if applicable, if not skip this.',
    name:'license',
},
{
    type:'input',
    message:'Please tell us whether or not you would like others to contribute to your code. If so what should they do?',
    name:'contributing',
},
{
    type:'input',
    message:'If you have any tests for your application, let us know how to run them. If not skip them.',
    name:'tests',
},
{
    type: 'input',
        message: "What is your GitHub username? ",
        name: 'username',
        default: 'jthui95',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Github username.");
            }
            return true;
        }
},
{
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
    default: 'readme-generator',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub repo is required for a badge.");
        }
        return true;
    }
},

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), function(err){
       
        if (err) {
            return console.log(err);
        }

        console.log("Readme.txt complete!")
    });
}

function init() {

}

init();
