# Peworld - Hire Job App

<div align="center">
  <img src="./src/assets/peworld-logo-purple.webp">
  <br>
  <br>
  <a href="https://wafash-peworld-react.netlify.app/">View Demo</a>
</div>

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Project Repository](#project-repository)
- [Project Screenshots](#project-screenshots)
- [Getting Started](#getting-started)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)

## Project Description

Peworld is an innovative job search website designed to connect leading companies in the technology industry with job seekers. Our platform allows companies to easily find and recruit the best talent in the technology field. Whether you are a company looking for skilled professionals or a job seeker aiming for your dream job, Peworld provides a seamless and efficient experience for both parties. Join Peworld today and take the next step in your career or hiring journey!

## Technologies Used

This website is built with following technologies:

- ReactJS
- Redux
- Tailwind CSS
- Storybook
- Netlify

Explore the platform by visiting [Peworld](https://wafash-peworld-react.netlify.app/) and experience its full range of features.

## Project Structure

```
└── fwgo-peworld
        ├── .storybook                  # Contains configuration files for Storybook.
        │   └── main.js
        |   └── preview.js
        ├── public                      # Contains the public assets.
        │   └── vite.svg
        ├── screenshots                 # Contains screenshots of the application.
        ├── src                         # Contains the source code of the application.
        │   ├── assets                  # Contains images, icons, and other static assets.
        │   ├── components              # Contains reusable React components.
        │   ├── config                  # Contains configuration files.
        │   ├── pages                   # Contains React components that represent different pages of the application.
        │   ├── redux                   # Contains Redux actions, reducers, and the store configuration.
        │   ├── services                # Contains services for making API calls and other external interactions.
        │   ├── stories                 # Contains Storybook stories for UI components.
        │   ├── auth.js                 # Handles authentication logic.
        │   ├── hooks.js                # Contains custom React hooks.
        │   ├── index.css               # The main CSS file.
        │   ├── main.js                 # The entry point of the application.
        │   ├── utils.js                # Contains utility functions.
        ├── .env                        # Contains environment variables.
        ├── .eslintrc.cjs               # Configuration file for ESLint.
        ├── .gitignore                  # Specifies files and directories that should be ignored by Git.
        ├── index.html                  # The main HTML file.
        ├── package-lock.json           # Describes the exact tree generated, so other installations can generate identical trees.
        ├── package.json                # Contains project dependencies and scripts.
        ├── postcss.config.js           # Configuration file for PostCSS.
        ├── README.md                   # The project documentation file.
        ├── tailwind.config.js          # Configuration file for Tailwind CSS.
        └── vite.config.js              # Configuration file for Vite.
```

This structure helps in keeping the project organized and maintainable, making it easier to navigate and manage the codebase.

## Project Repository

This project consists of both frontend and backend repositories. You can find link of backend repositoy and the deployed version of this website below:

- Back End Repository: [Peworld Back End](https://github.com/wafash08/be-peworld)
- Live Demo: [Peworld Live Demo](https://wafash-peworld-react.netlify.app/)

Visit the backend repository for server-side code and API details. The live demo link will take you to the deployed version of the Peworld application.

## Project Screenshots

Here are some screenshots of Peworld showcasing various pages of the application:

<table>
    <tr>
      <td>Register Worker</td>
      <td>Register Recruiter</td>
    </tr>
    <tr>
      <td><img src="./screenshots/signup-worker.png" style="width:100%;"></td>
      <td><img src="./screenshots/signup-recruiter.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Login Worker</td>
      <td>Login Recruiter</td>
    </tr>
    <tr>
      <td><img src="./screenshots/login-page.png" style="width:100%;"></td>
      <td><img src="./screenshots/login-page.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Landing Page</td>
      <td>Home Page (Search Feature)</td>
    </tr>
    <tr>
      <td><img src="./screenshots/landing-page-login.png" style="width:100%;"></td>
      <td><img src="./screenshots/home-search.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Home Page (Sort and Filter Feature)</td>
      <td>Worker's Portfolio Page</td>
    </tr>
    <tr>
      <td><img src="./screenshots/home-sort-and-filter.png" style="width:100%;"></td>
      <td><img src="./screenshots/worker-portfolio.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Worker's Experiences Page</td>
      <td>Your Portfolios Page (As Worker)</td>
    </tr>
    <tr>
      <td><img src="./screenshots/worker-experience.png" style="width:100%;"></td>
      <td><img src="./screenshots/your-portfolios.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Your Experiences Page (As Worker)</td>
      <td>Edit Your Profile Page (As Worker)</td>
    </tr>
    <tr>
      <td><img src="./screenshots/your-experiences.png" style="width:100%;"></td>
      <td><img src="./screenshots/your-edit-profile.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Notifications Page</td>
      <td>Your Profile Page (As Recruiter)</td>
    </tr>
    <tr>
      <td><img src="./screenshots/notifications-page.png" style="width:100%;"></td>
      <td><img src="./screenshots/recruiter-profile.png" style="width:100%;"></td>
    </tr>
    <tr>
      <td>Edit Your Profile Page (As Recruiter)</td>
      <td>Hire Page</td>
    </tr>
    <tr>
      <td><img src="./screenshots/recruiter-edit-profile.png" style="width:100%;"></td>
      <td><img src="./screenshots/hire-page.png" style="width:100%;"></td>
    </tr>
</table>

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repository

```sh
git clone https://github.com/wafash08/fwgo-peworld.git
```

2. Navigate to the project directory:

```sh
cd fwgo-peworld
```

3. Install the dependencies:

```sh
npm install
```

4. Create a .env file:

Create a .env file in the root directory of the project and add the necessary environment variables. Example of environment variable name:

```sh
VITE_API_URL_V1=yourapiurlhere
```

5. Start the development server:

```sh
npm run dev
```

This will start the development server and open the application in your default web browser. If it doesn't, you can access it at http://localhost:3000.

### Storybook

To start Storybook and view your UI components in isolation:

```sh
npm run storybook
```

This will start Storybook and open it in your default web browser. If it doesn't, you can access it at http://localhost:6006.

### Test User Accounts

Access pre-configured user accounts for testing purposes. Use these accounts to simulate different scenarios and ensure your job offers are working as expected.

- Recruiter Account

```json
{
  "email": "albertdera@gmail.com",
  "password": "asdf1234"
}
```

- Worker Account

```json
{
  "email": "charliegreen@gmail.com",
  "password": "asdf1234"
}
```

## Contributions

Any contribution to Peworld is welcomed! If you have an idea for a new feature or have found a bug, please follow these steps to contribute:

### How to Contribute

1. Fork the Repository:

Fork the repository to your own GitHub account by clicking the "Fork" button at the top right of the repository page.

2. Clone the Forked Repository:

```sh
git clone https://github.com/your-username/fwgo-peworld.git
```

3. Create a New Branch:

Create a new branch for your feature or bug fix:

```sh
git checkout -b feature/YourFeatureName
```

or

```sh
git checkout -b bugfix/YourBugFixName
```

4. Make Your Changes:

Make the necessary changes in your local development environment.

5. Commit Your Changes:

Commit your changes with a descriptive commit message:

```sh
git add .
git commit -m "Add Your Descriptive Commit Message"
```

6. Push to Your Fork:

Push your changes to your forked repository:

```sh
git push origin feature/YourFeatureName
```

or

```sh
git push origin bugfix/YourBugFixName
```

7. Open a Pull Request:

Open a pull request to the main repository by navigating to the original repository and clicking the "New Pull Request" button. Ensure your pull request includes a clear description of the changes and why they are necessary.

### Issues

If you encounter any issues, please open an issue in the GitHub repository. Provide as much detail as possible to help us resolve the problem quickly.

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](./LICENSE) file.

## Contact

If you have any questions, suggestions, or just want to get in touch, feel free to contact Me!

- Email: saefulhaqwafa@gmail.com
- Linkedin: [linkedin.com/in/m-wafa-saeful-haq](https://www.linkedin.com/in/m-wafa-saeful-haq)
- Twitter: [@saefulhaqwafa](https://x.com/saefulhaqwafa)
