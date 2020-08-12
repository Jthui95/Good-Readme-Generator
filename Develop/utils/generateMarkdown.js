function generateMarkdown(userResponse, userInfo) {
  return `
# ${data.title} \n;
## Description \n ${userResponse.description}
## Table of Contents \n* 
## Installation ${userResponse.install} [Installation](#Installation)\n*
## Usage \n ${userResponse.usage} [Usage](#Usage)\n*
## License \n ${ userResponse.license} [License](#License)\n* 
## Contributing \n ${userResponse.contributing} [Contributing](#Contributing)\n*
## Badges \n ![languages badge](https://img.shields.io/github/languages/top/${userInfo.userName}/${userInfo.repoName}) [Badges](#Badges)\n*
## Tests \n ${userResponse.tests} [Tests](#Tests)\n*
## Questions \n For any questions, contact me at [${userInfo.email}](mailto:${userInfo.email}). [Questions](#Questions)
#### [![Profile Pic](${userInfo.picture})](https://github.com/${userInfo.userName})
`;
}

module.exports = generateMarkdown;
