// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your project title",
    name: "title",
  },
  {
    type: "input",
    message: "What is your user story",
    name: "userStory",
  },
  {
    type: "input",
    message: "What is the description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What installation do you use for your code",
    name: "installation",
  },
  {
    type: "list",
    message: "What license do you use for your project",
    name: "license",
    choices: ["MIT","APACHE 2.0","BSD 3","GPL 3.0","None"],
  },
  {
    type: "input",
    message: "What kind of tests do you run in your code",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
