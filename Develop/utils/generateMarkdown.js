
// returns an object with the license link and the license badge html markdown
function getLicenseBadgeLink(license) {
  let tempBadge = "";
  let tempLink = "";
  switch (license) {
    case "Apache":
      tempBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      tempLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost":
      tempBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
      tempLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD":
      tempBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      tempLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Creative Commons":
      tempBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
      tempLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse":
      tempBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
      tempLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU":
      tempBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      tempLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "IBM":
      tempBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
      tempLink = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "ISC":
      tempBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      tempLink = "https://opensource.org/licenses/ISC";
      break;
    case "MIT":
      tempBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      tempLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla":
      tempBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
      tempLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Open Data Commons":
      tempBadge = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]";
      tempLink = "https://opendatacommons.org/licenses/by/";
      break;
    case "Perl":
      tempBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
      tempLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
  }
  let badgeObj = {
    html: tempBadge,
    link: tempLink
  }
  return badgeObj;
}

// formats and generates a readme in markdown based on the user project information
function generateMarkdown(data) {
  let formatted = ""; // temp string to hold the formatted markdown
  let badge = getLicenseBadgeLink(data.license); // gets the badge info 

  formatted += `# ${data.title} ${badge.html}(${badge.link})\n\n`;
  formatted += `## Description \n\n`;
  formatted += `${data.desc} \n\n`;
  formatted += `## Table of Contents \n\n`;
  formatted += `* [Installation](#installation)\n`;
  formatted += `* [Usage](#usage)\n`;
  formatted += `* [Contribute](#contribute)\n`;
  formatted += `* [Tests](#tests)\n`;
  formatted += `* [License](#license)\n`;
  formatted += `* [Questions](#questions)\n\n`;
  formatted += `## Installation \n\n`;
  formatted += `${data.install} \n\n`;
  formatted += `## Usage \n\n`;
  formatted += `${data.usage} \n\n`;
  formatted += `## Contribute \n\n`;
  formatted += `${data.contribute} \n\n`;
  formatted += `## Tests \n\n`;
  formatted += `${data.tests} \n\n`;
  formatted += `## License \n\n`;
  formatted += `This project is using the [${data.license}](${badge.link}) license. \n\n`;
  formatted += `## Questions \n\n`;
  formatted += `[Github Account](https://github.com/${data.username}) \n\n`;
  formatted += `If you have any further questions please reach out to: <${data.email}> \n\n`;

  return formatted;
}

module.exports = generateMarkdown;
