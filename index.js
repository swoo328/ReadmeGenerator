// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your user story?",
    name: "userStory",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What installation do you use for your code?",
    name: "installation",
  },
  {
    type: "list",
    message: "What license do you use for your project?",
    name: "license",
    choices: ["MIT","APACHE 2.0", "None"],
  },
  {
    type: "input",
    message: "What kind of tests do you run in your code?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
    if(err) throw err;
    console.log("The file has been saved!")
   });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(data){
  writeToFile("README.md", generateMarkdown(data));
  console.log(data);
  });
}

// Function call to initialize app
init();
