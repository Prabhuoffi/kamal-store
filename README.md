# Kamal Store - E-Commerce React Application

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/YOUR_PROJECT_ID)](https://app.codacy.com/gh/Prabhuoffi/kamal-store/dashboard)
[![Build Status](https://github.com/Prabhuoffi/kamal-store/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/Prabhuoffi/kamal-store/actions)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/YOUR_PROJECT_ID)](https://app.codacy.com/gh/Prabhuoffi/kamal-store/dashboard)

A modern, responsive e-commerce web application built with React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs ESLint to check code quality and find potential issues in JavaScript/JSX files.

### `npm run lint:fix`

Automatically fixes ESLint issues where possible.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Code Quality

This project uses [Codacy](https://www.codacy.com/) for automated code quality analysis and coverage reporting.

### Setting up Codacy

1. **Sign up/Login to Codacy**: Go to [Codacy](https://www.codacy.com/) and sign up with your GitHub account.

2. **Add your repository**: 
   - Click "Add repository" in Codacy dashboard
   - Select `kamal-store` from your repositories
   - Codacy will automatically analyze your code

3. **Get your Codacy Project Token**:
   - Go to your project settings in Codacy
   - Navigate to "Integrations" → "Project API"
   - Copy your Project Token

4. **Add the token to GitHub Secrets**:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `CODACY_PROJECT_TOKEN`
   - Value: Paste your Codacy Project Token
   - Click "Add secret"

5. **Update README badges**:
   - Replace `YOUR_USERNAME` with your GitHub username
   - Replace `YOUR_PROJECT_ID` with your Codacy project ID
   - Find your project ID in Codacy project settings URL

### Codacy Features Enabled

- **ESLint**: JavaScript/JSX code quality analysis
- **StyleLint**: CSS code quality analysis
- **Metrics**: Code complexity analysis
- **Duplication**: Duplicate code detection
- **Coverage**: Test coverage reporting

### GitHub Actions Workflows

This project includes automated CI/CD workflows:

- **Codacy Analysis** (`.github/workflows/codacy.yml`): Runs on every push and PR
  - Security scanning
  - Code quality analysis
  - Coverage reporting

- **Build and Deploy** (`.github/workflows/deploy.yml`): Deploys to GitHub Pages
  - Runs tests and linting
  - Builds production bundle
  - Deploys to `gh-pages` branch

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
