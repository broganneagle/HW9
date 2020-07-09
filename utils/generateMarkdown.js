function generateMarkdown(data) {
    return `

  # Project Title : ${data.title}

  ## Project Description:
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author] (#Author)
  * [Badges](#badges)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} on GitHub.

  ## License
  MIT License

  ## Author 
  ${data.username}

  ## Badges
  ![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
  `;
  }
  
  module.exports = generateMarkdown;