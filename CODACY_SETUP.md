# Codacy Integration Setup Guide

This guide will help you set up Codacy code quality analysis for the Kamal Store project.

## What is Codacy?

Codacy is an automated code review tool that helps you:
- Identify code quality issues
- Track code coverage
- Detect security vulnerabilities
- Monitor code duplication
- Track technical debt

## Prerequisites

- GitHub account with repository access
- GitHub Actions enabled in your repository
- Push access to the repository

## Step-by-Step Setup

### 1. Create Codacy Account

1. Go to [https://www.codacy.com/](https://www.codacy.com/)
2. Click "Sign up" or "Login with GitHub"
3. Authorize Codacy to access your GitHub account

### 2. Add Your Repository to Codacy

1. Once logged in, click **"Add repository"** button
2. You'll see a list of your GitHub repositories
3. Find and select **"kamal-store"**
4. Click **"Add repository"**
5. Codacy will start analyzing your code automatically

### 3. Get Your Codacy Project Token

1. In Codacy dashboard, go to your **kamal-store** project
2. Click on **"Settings"** (gear icon)
3. Navigate to **"Integrations"** → **"Project API"**
4. Copy the **Project Token** (keep this secure!)
5. Also note your **Project ID** from the URL (you'll need this for badges)

### 4. Add Codacy Token to GitHub Secrets

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/kamal-store`
2. Click **"Settings"** tab
3. In the left sidebar, click **"Secrets and variables"** → **"Actions"**
4. Click **"New repository secret"** button
5. Enter the following:
   - **Name**: `CODACY_PROJECT_TOKEN`
   - **Secret**: Paste your Codacy Project Token
6. Click **"Add secret"**

### 5. Update README Badges

1. Open `README.md` in your repository
2. Replace the placeholder values:
   ```markdown
   [![Codacy Badge](https://app.codacy.com/project/badge/Grade/YOUR_PROJECT_ID)](https://app.codacy.com/gh/YOUR_USERNAME/kamal-store/dashboard)
   ```
   
   Replace:
   - `YOUR_USERNAME` → Your GitHub username
   - `YOUR_PROJECT_ID` → Your Codacy project ID (from step 3)

3. Commit and push the changes

### 6. Enable GitHub Actions

The workflows are already created. To verify they're enabled:

1. Go to your GitHub repository
2. Click **"Actions"** tab
3. You should see two workflows:
   - **Codacy Analysis**
   - **Build and Deploy**

### 7. Push Changes to Trigger Workflows

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Add Codacy integration and CI/CD workflows"

# Push to main branch
git push origin main
```

### 8. Monitor First Analysis

1. Go to **"Actions"** tab in GitHub
2. You'll see the workflows running
3. Wait for completion (usually 2-5 minutes)
4. Check the results in both GitHub Actions and Codacy dashboard

## Configuration Files Explained

### `.codacy.yml`
Main configuration file that defines:
- Excluded paths (node_modules, build, etc.)
- Enabled engines (ESLint, StyleLint, Metrics)
- Duplication detection settings
- Coverage settings

### `.github/workflows/codacy.yml`
GitHub Actions workflow for:
- Running Codacy security scans
- Uploading SARIF results to GitHub
- Running test coverage
- Sending coverage reports to Codacy

### `.github/workflows/deploy.yml`
GitHub Actions workflow for:
- Building the production bundle
- Running tests and linting
- Deploying to GitHub Pages

### `.eslintrc.json`
ESLint configuration for JavaScript/JSX code quality checks

## Troubleshooting

### Workflow Fails on First Run

This is normal if:
- Coverage files don't exist yet (add tests)
- ESLint finds issues (run `npm run lint:fix`)

The workflows have `continue-on-error` flags to prevent blocking.

### Coverage Report Not Showing

1. Ensure you have tests that generate coverage
2. Run locally: `npm test -- --coverage --watchAll=false`
3. Check if `coverage/lcov.info` is generated
4. Verify `CODACY_PROJECT_TOKEN` is set correctly

### Badges Not Showing

1. Verify you replaced `YOUR_USERNAME` and `YOUR_PROJECT_ID`
2. Check if repository is public (badges work best with public repos)
3. Wait a few minutes for Codacy to process the first analysis

## Next Steps

1. **Review Code Quality Issues**: Check Codacy dashboard for issues
2. **Fix Issues**: Address code quality problems identified
3. **Add More Tests**: Improve test coverage
4. **Set Quality Gates**: Configure quality rules in Codacy settings
5. **Enable Pull Request Comments**: Let Codacy comment on PRs automatically

## Useful Commands

```bash
# Run linting locally
npm run lint

# Fix auto-fixable lint issues
npm run lint:fix

# Run tests with coverage
npm test -- --coverage --watchAll=false

# Build production bundle
npm run build
```

## Additional Resources

- [Codacy Documentation](https://docs.codacy.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [ESLint Documentation](https://eslint.org/docs/latest/)

## Support

If you encounter any issues:
1. Check Codacy documentation
2. Review GitHub Actions logs
3. Check workflow file syntax
4. Verify all secrets are set correctly

---

**Note**: The first analysis may take a few minutes. Subsequent analyses will be faster.

