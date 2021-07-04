// TODO: Include packages needed for this application
var inquirer = require('inquirer');


/*
Title of project
Description
Table of Contents
Installations
Usage
License
Contributing
Tests
Questions
*/



// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects title?",
    validate(value) {
      if (!value) {
        console.log("please enter in a title!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "desc",
    message: "Describe your project:",
    validate(value) {
      if (!value) {
        console.log("please enter in a description!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "install",
    message: "How do you install this project?",
    validate(value) {
      if (!value) {
        console.log("please provide installation instructions!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project once installed?",
    validate(value) {
      if (!value) {
        console.log("please provide usage information!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "contribute",
    message: "If you would like others to contribute, please enter in some guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "How would you test this project?",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => { }

// TODO: Create a function to initialize app
const init = () => {
  console.log("oooo");
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
}

// Function call to initialize app
init();
