// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const myArgs = process.argv.slice(2);

// used if the user passes in the "test" parameter when starting the node app
let mockData = {
  title: "Example Project",
  desc: "Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.",
  install: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  usage: "Provide instructions and examples for use. Include screenshots as needed.",
  contribute: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
  tests: "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
  license: "Creative Commons",
  username: "TimPrimmer",
  email: "timprimmer@gmail.com"
};

// our giant questions array for inquirer
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
    default: "N/A",
  },
  {
    type: "input",
    name: "tests",
    message: "How would you test this project?",
    default: "N/A",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    default: "Creative Commons",
    choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
    validate(value) {
      if (!value) {
        console.log("please provide your Github username!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate(value) {
      if (!value) {
        console.log("please provide your email!")
        return false;
      }
      else { return true; }
    }
  },
];

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => { // writing the file to the readme
    if (err) {
      console.log("Readme generation failed.");
      return console.error(err);
    } else {
      console.log("Readme generated successfully! Check the output folder for the file.");
    }
  });
}

// function to initialize app
const init = () => {
  let formattedReadme = "";
  if (myArgs[0] === "test") { // if the user passes in "test" as the only argument, it will use the mock data instead skipping the prompts
    formattedReadme = markdown(mockData);
    writeToFile("./output/Example_README.md", formattedReadme);
  }
  else {
    inquirer.prompt(questions).then((answers) => { // prompt the user for their project details
      formattedReadme = markdown(answers); 
      writeToFile("./output/README.md", formattedReadme);
    });
  }
}

// Function call to initialize app
init();
