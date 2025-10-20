# Contributing to Kamal Store

Thank you for your interest in contributing to Kamal Store! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Strategy](#branch-strategy)
- [Code Review Process](#code-review-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- GitHub account

### Initial Setup

1. **Fork the repository**
   ```bash
   # Click 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kamal-store.git
   cd kamal-store
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Prabhuoffi/kamal-store.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create your development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Development Workflow

### Standard Development Flow

1. **Sync with upstream**
   ```bash
   git checkout develop
   git pull upstream develop
   git push origin develop
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/feature-name
   # or
   git checkout -b fix/bug-name
   ```

3. **Make your changes**
   - Write clean, maintainable code
   - Follow coding standards
   - Add tests for new features
   - Update documentation

4. **Run quality checks**
   ```bash
   npm run lint        # Check code quality
   npm run lint:fix    # Auto-fix issues
   npm test           # Run tests
   npm run build      # Ensure build passes
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/feature-name
   ```

7. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Fill out the PR template completely
   - Request review from maintainers

---

## Branch Strategy

### Branch Types

- **`main`**: Production-ready code (protected)
- **`develop`**: Integration branch for features (protected)
- **`feature/*`**: New features
- **`fix/*`**: Bug fixes
- **`hotfix/*`**: Urgent production fixes
- **`refactor/*`**: Code refactoring
- **`docs/*`**: Documentation updates

### Branch Naming Convention

```
<type>/<short-description>

Examples:
- feature/user-authentication
- fix/login-button-crash
- refactor/header-component
- docs/update-readme
- hotfix/critical-security-patch
```

---

## Code Review Process

### Review Stages

#### 1. Automated Reviews (AI-Powered)
- **Codacy**: Code quality analysis
- **ESLint**: JavaScript/JSX linting
- **npm audit**: Security vulnerability scanning
- **Build checks**: Compilation and build verification
- **Test suite**: Automated test execution

#### 2. Manual Review (Senior Developer)

**Required Approvals**: 1 senior developer approval minimum

**Review Focus Areas**:
- ✅ **Code Logic**: Correctness and efficiency
- ✅ **Code Quality**: Readability and maintainability
- ✅ **Architecture**: Design patterns and best practices
- ✅ **Security**: Vulnerability assessment
- ✅ **Performance**: Optimization opportunities
- ✅ **Testing**: Test coverage and quality
- ✅ **Documentation**: Code comments and docs updates

### Review Timeline

- **Initial Review**: Within 24-48 hours
- **Follow-up Reviews**: Within 24 hours of updates
- **Urgent Hotfixes**: Within 2-4 hours

### Responding to Review Comments

1. Address all review comments
2. Mark conversations as resolved when fixed
3. Request re-review after making changes
4. Be respectful and professional in responses

---

## Coding Standards

### JavaScript/JSX Standards

#### General Rules

```javascript
// ✅ Good
const getUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// ❌ Bad
function getUserData(userId) {
  fetch('/api/users/' + userId).then(res => res.json())
}
```

#### React Component Standards

```javascript
// ✅ Good - Functional component with proper structure
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

/**
 * UserCard component displays user information
 * @param {Object} props - Component props
 * @param {string} props.userId - User ID to display
 */
const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  const fetchUser = async (id) => {
    try {
      const data = await getUserData(id);
      setUser(data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

UserCard.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserCard;
```

### CSS Standards

```css
/* ✅ Good - BEM naming convention */
.user-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card__header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.user-card__content {
  color: #666;
}

/* ❌ Bad */
.card {
  padding: 20px;
}

.header {
  font-size: 24px;
}
```

### Code Quality Requirements

- **No console.log** in production code
- **Proper error handling** for all async operations
- **Meaningful variable names** (no single letters except loops)
- **Comments for complex logic**
- **PropTypes** for all React components
- **Accessibility** attributes (aria-labels, etc.)
- **Responsive design** for all UI components

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commits
feat(auth): add user login functionality
fix(header): resolve navigation menu overflow issue
docs(readme): update installation instructions
refactor(api): simplify user data fetching logic
perf(images): implement lazy loading for product images
test(cart): add unit tests for shopping cart

# With body
feat(checkout): implement payment processing

- Add Stripe integration
- Create payment confirmation page
- Send order confirmation emails

Closes #123
```

---

## Pull Request Process

### Before Creating a PR

- ✅ All tests pass locally
- ✅ ESLint shows no errors
- ✅ Build completes successfully
- ✅ Code is properly formatted
- ✅ Documentation is updated
- ✅ Commit messages follow guidelines
- ✅ Branch is up to date with develop/main

### PR Requirements

1. **Fill out the PR template completely**
2. **Link related issues** (Fixes #123)
3. **Add screenshots** for UI changes
4. **Describe testing performed**
5. **List breaking changes** (if any)
6. **Update documentation** (if needed)

### PR Approval Criteria

- ✅ All automated checks pass
- ✅ No merge conflicts
- ✅ At least 1 approval from senior developer
- ✅ All review comments addressed
- ✅ Code coverage maintained or improved
- ✅ No security vulnerabilities introduced
- ✅ Documentation updated

### Merging

- **Only squash and merge** allowed (enforced)
- **Delete branch** after merge
- **Wait for all checks** before merging
- **Maintainers only** can merge to main

---

## Quality Gates

### Automated Quality Checks

All PRs must pass:

1. **Build Check**: Code compiles successfully
2. **Linting**: No ESLint errors
3. **Tests**: All tests pass
4. **Coverage**: Code coverage ≥ current level
5. **Security**: No high/critical vulnerabilities
6. **Codacy**: Grade A or B minimum
7. **Complexity**: Cyclomatic complexity ≤ 10

### Manual Review Checklist

Senior developers verify:

- [ ] Code logic is correct
- [ ] Code is readable and maintainable
- [ ] Proper error handling
- [ ] Security best practices followed
- [ ] Performance optimized
- [ ] UI/UX is consistent
- [ ] Accessibility standards met
- [ ] Tests are comprehensive

---

## Getting Help

### Resources

- **Documentation**: Check `/docs` folder
- **Issues**: Search existing issues first
- **Discussions**: Use GitHub Discussions for questions
- **Codacy Dashboard**: Review code quality metrics

### Contact

- **Email**: [maintainer-email]
- **GitHub Issues**: For bug reports and features
- **GitHub Discussions**: For questions and discussions

---

## Recognition

Contributors who follow these guidelines and maintain high code quality will be recognized in:
- Project README contributors section
- Release notes
- Community highlights

---

**Thank you for contributing to Kamal Store! 🎉**

