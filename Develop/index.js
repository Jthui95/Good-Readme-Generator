// required packages
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
// const axios = require('axios')

// internal files
const generateMarkdown = require('./utils/generateMarkdown.js');

// const githubInfo = {
//  getUser(userResponse){
//     let response = axios.get(`https://api.github.com/users/${userResponse.username}`);
//     return response.data
//     }
// }
//Answers we will get from the User.
const questions = [
{
    type: 'input',
    message: "What is your GitHub username? ",
    name: 'username',
    default: 'Jthui95',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a valid Github username.");
        }
        return true;
    }
},
{
    
    type: 'input',
    message: 'What would you like to name your README file?',
    name:'Title',
    default: 'readme.txt',
    validate: function(answer){
        if (answer.length < 1) {
            return console.log('A title for your README is required.')
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
            return console.log("A description is requried for your README.")
        } else
        return true;
    }
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

   

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), function(err){
       
        if (err) {
            return console.log(err);
        }

        console.log("Readme.txt complete!")
    });
}
const readMe = util.promisify(writeToFile);


async function init() {
    const userResponse = await inquirer.prompt(questions);
    console.log("Your answers:", userResponse);
    console.log("We've recieved your answers, Now formating your info.");


    // const userInfo = await githubInfo(userResponse);
    // console.log("Your Github info" , userInfo);

    console.log("Creating your README")
    const markdown = generateMarkdown(userResponse, userInfo);
    console.log(markdown);

    await writeFileAsync('README.md', markdown);
    
}


init();
