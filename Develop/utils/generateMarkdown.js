const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let formatted = ""; // temp string to hold the formatted markdown

  formatted += `# ${data.title} \n\n`;
  formatted += `## Description \n\n`;
  formatted += `${data.desc} \n\n`;
  formatted += `## Table of Contents \n\n`;
  formatted += `* [Installation](#installation)\n`;
  formatted += `* [Usage](#usage)\n`;
  formatted += `* [Contribute](#contribute)\n`;
  formatted += `* [License](#license)\n`;
  formatted += `* [Tests](#tests)\n\n`;
  formatted += `## Installation \n\n`;
  formatted += `${data.install} \n\n`;
  formatted += `## Usage \n\n`;
  formatted += `${data.usage} \n\n`;
  formatted += `## Contribute \n\n`;
  formatted += `${data.contribute} \n\n`;
  formatted += `## License \n\n`;
  formatted += `${data.license} \n\n`;
  formatted += `## Tests \n\n`;
  formatted += `${data.tests} \n\n`;

  fs.writeFile('README.md', formatted, err => {
    if (err) {
      return err;
    }
  });
  return "Readme generated successfully! Check the main folder for the file";
}

module.exports = generateMarkdown;
