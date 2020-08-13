function generateMarkdown(userResponse, userInfo) {
  return `
# ${userResponse.title} \n

## Description \n ${userResponse.description}

## Table of Contents \n* 
  [Installation](#Installation)\n* 
  [Usage](#Usage)\n* 
  [License](#License)\n* 
  [Contributing](#Contributing)\n*
  [Badges](#Badges)\n*
  [Tests](#Tests)\n*
  [Questions](#Questions)\n*

## Installation\n 
  *What is needed to install the project*
  ${userResponse.install} 

## Usage \n 
  *Instructions on how to use the application*
  ${userResponse.usage} 

## License \n 
  ${ userResponse.license} 

## Contributing \n 
  *If you would like people to contribute to your code*
  ${userResponse.contributing} 

## Badges \n ![languages badge](https://img.shields.io/github/languages/top/${userResponse.username}/${userResponse.repo}) 

## Tests \n 
  *Tests for the application and how to run them.*
  ${userResponse.tests} 

## Questions \n 
For any questions, contact me at [${userResponse.url}](mailto:${userResponse.email}). 

#### [![Profile Pic](${userResponse.picture})](https://github.com/${userResponse.username})
`;
}

module.exports = generateMarkdown;
