// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var markdown = require('./utils/generateMarkdown');


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
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    default: 'Creative Commons',
    choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl'],
  },
];

let mockData = {
  title: "Timbos Readme Generator",
  desc: "Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.",
  install: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  usage: "Provide instructions and examples for use. Include screenshots as needed.",
  contribute: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
  tests: "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
  license: "Creative Commons"
};


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => { }

// TODO: Create a function to initialize app
const init = () => {

  console.log(markdown(mockData));

  /*
  inquirer.prompt(questions).then((answers) => { // prompt the user for their project details
    //console.log(JSON.stringify(answers, null, '  '));
    markdown(answers);
  });
  */
}

// Function call to initialize app
init();
