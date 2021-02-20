// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data.license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  # Table of Contents:
  * Project Title
  * Github Username
  * User story 
  * Description
  * Installation
  * License
  * Tests
  * Questions

  ## Github Username
  ${data.Username}

  ## User story 
  ${data.userStory}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  Questions/issues can be sent to: ${data.email}
`;
}

module.exports = generateMarkdown;
