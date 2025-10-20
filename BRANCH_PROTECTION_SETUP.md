# GitHub Branch Protection & Repository Access Setup Guide

This guide will help you configure GitHub repository settings to implement strict access controls, branch protection rules, and merge policies.

---

## Table of Contents

1. [Branch Protection Rules](#branch-protection-rules)
2. [Repository Access Control](#repository-access-control)
3. [Merge Policies](#merge-policies)
4. [Status Checks Configuration](#status-checks-configuration)
5. [Code Review Requirements](#code-review-requirements)
6. [Verification Steps](#verification-steps)

---

## Branch Protection Rules

### Step 1: Access Branch Protection Settings

1. Go to your repository: `https://github.com/Prabhuoffi/kamal-store`
2. Click **Settings** tab
3. In the left sidebar, click **Branches**
4. Under "Branch protection rules", click **Add rule**

### Step 2: Protect Main Branch

#### Rule Name
```
main
```

#### Settings to Enable

**Branch name pattern:**
```
main
```

**Protect matching branches:**

✅ **Require a pull request before merging**
   - ✅ Require approvals: **1** (minimum)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require review from Code Owners (optional)
   - ✅ Restrict who can dismiss pull request reviews
   - ✅ Allow specified actors to bypass required pull requests (Only repository admins)

✅ **Require status checks to pass before merging**
   - ✅ Require branches to be up to date before merging
   - **Required status checks:**
     - `Code Quality Analysis`
     - `AI Code Review (Codacy)`
     - `Security Vulnerability Scan`
     - `Build Application`
     - `PR Validation`

✅ **Require conversation resolution before merging**
   - All review comments must be resolved

✅ **Require signed commits** (Optional but recommended)

✅ **Require linear history**
   - Prevents merge commits, enforces squash merging

✅ **Require deployments to succeed before merging** (Optional)

✅ **Lock branch**
   - ❌ Do NOT enable (prevents pushes entirely)

✅ **Do not allow bypassing the above settings**
   - Even repository admins must follow these rules

✅ **Restrict who can push to matching branches**
   - Select: **Restrict pushes that create matching branches**
   - Only allow: Repository administrators

**Save the rule** by clicking "Create" or "Save changes"

### Step 3: Protect Develop Branch

Repeat the above steps for the `develop` branch with the same settings.

**Branch name pattern:**
```
develop
```

Apply the same protection rules as the main branch.

---

## Repository Access Control

### Step 1: Configure Base Permissions

1. Go to **Settings** → **Collaborators and teams**
2. Set **Base permissions** to:
   - Public repository: **Read**
   - Private repository: **Read** (default)

### Step 2: Define Access Levels

#### Access Matrix

| Role | Permission Level | Capabilities |
|------|-----------------|--------------|
| **Owner** | Admin | Full access, manage settings, delete repo |
| **Senior Developers** | Maintain | Manage issues, PRs, and settings (no delete) |
| **Developers** | Write | Create branches, open PRs, review code |
| **Contributors** | Triage | Manage issues and PRs without code access |
| **Viewers** | Read | View and clone repository only |

### Step 3: Add Team Members

1. Click **Add people** or **Add teams**
2. Enter GitHub username or email
3. Select appropriate **Role** from dropdown
4. Send invitation

#### Recommended Team Structure

**Senior Developers Team:**
- Permission: **Maintain**
- Members: 2-3 senior developers
- Responsibilities:
  - Code review and approval
  - Merge pull requests
  - Mentor junior developers

**Developers Team:**
- Permission: **Write**
- Members: All active developers
- Responsibilities:
  - Create feature branches
  - Submit pull requests
  - Participate in code reviews

---

## Merge Policies

### Step 1: Configure Merge Button Settings

1. Go to **Settings** → **General**
2. Scroll to **Pull Requests** section

### Step 2: Enable Squash Merging Only

**Merge button settings:**

✅ **Allow squash merging**
   - Default commit message: **Pull request title and description**
   - Default commit message: **Pull request title**

❌ **Allow merge commits** (DISABLE)

❌ **Allow rebase merging** (DISABLE)

### Step 3: Additional PR Settings

✅ **Automatically delete head branches**
   - Cleans up branches after merge

✅ **Always suggest updating pull request branches**
   - Keeps PRs up to date with base branch

❌ **Allow auto-merge** (Optional - can enable with proper checks)

**Save changes**

---

## Status Checks Configuration

### Required Status Checks for Merging

All PRs to `main` and `develop` must pass these checks:

#### 1. Code Quality Analysis
- ESLint checks
- Build verification
- Test execution

#### 2. AI Code Review (Codacy)
- Automated code analysis
- Quality grade check
- Code complexity analysis

#### 3. Security Vulnerability Scan
- npm audit
- Dependency vulnerability check
- Security best practices

#### 4. Build Application
- Production build must succeed
- No build errors or warnings

#### 5. PR Validation
- PR title format check
- PR size analysis
- Checklist completion

### How to Configure

1. Go to **Settings** → **Branches**
2. Edit the branch protection rule for `main`
3. Check **Require status checks to pass before merging**
4. Search and select each required status check
5. Check **Require branches to be up to date before merging**
6. Save changes

---

## Code Review Requirements

### Minimum Requirements

**For ALL pull requests to main:**
- ✅ **1 approving review** from senior developer
- ✅ All **automated checks pass**
- ✅ All **conversations resolved**
- ✅ Branch is **up to date** with base
- ✅ **No merge conflicts**

### CODEOWNERS File (Optional)

Create `.github/CODEOWNERS` file to automatically assign reviewers:

```
# Default owners for everything in the repo
* @senior-dev-1 @senior-dev-2

# Frontend components
/src/components/ @frontend-lead

# Workflows and CI/CD
/.github/ @devops-lead

# Documentation
/docs/ @tech-writer
*.md @tech-writer
```

### Code Review Process

1. **Developer creates PR** → Template auto-fills
2. **Automated checks run** → AI analysis + tests
3. **Senior developer reviews** → Manual code review
4. **Developer addresses feedback** → Updates PR
5. **Re-review if needed** → Approval granted
6. **All checks pass** → Squash and merge
7. **Branch auto-deletes** → Cleanup

---

## Verification Steps

### Test Branch Protection

1. **Try direct push to main** (should fail)
   ```bash
   git checkout main
   echo "test" >> README.md
   git commit -am "test direct push"
   git push origin main
   # Expected: ❌ Remote rejected (protected branch)
   ```

2. **Create PR without approval** (should not merge)
   - Create a test PR
   - Try to merge without approval
   - Expected: ❌ Merge button disabled

3. **Create PR with failing checks** (should not merge)
   - Create PR with linting errors
   - Expected: ❌ Cannot merge until checks pass

4. **Create PR with approval and passing checks** (should merge)
   - Create valid PR
   - Get approval
   - All checks pass
   - Expected: ✅ Can merge with squash

### Verify Access Controls

1. **Test developer access:**
   - Can create branches: ✅
   - Can open PRs: ✅
   - Can push to main: ❌
   - Can merge PRs: ❌

2. **Test senior developer access:**
   - Can review PRs: ✅
   - Can approve PRs: ✅
   - Can merge PRs: ✅
   - Can push to main: ❌

3. **Test admin access:**
   - All permissions: ✅
   - Can modify settings: ✅

---

## Workflow Integration

### GitHub Actions Integration

All workflows are configured to:
- ✅ Run automatically on PR creation
- ✅ Post results as PR comments
- ✅ Block merge if critical issues found
- ✅ Integrate with Codacy for AI analysis
- ✅ Check security vulnerabilities
- ✅ Validate code quality

### Codacy Integration

1. **Enable GitHub integration** in Codacy
2. **Enable status checks** in Codacy settings
3. **Configure quality gates**:
   - Grade: A or B minimum
   - Coverage: Maintain or increase
   - Complexity: ≤ 10 per function
   - Duplication: < 5%

---

## Common Issues & Solutions

### Issue: Cannot merge even with approval

**Solution:**
- Check if all required status checks passed
- Verify branch is up to date with base
- Ensure all conversations are resolved

### Issue: Status checks not appearing

**Solution:**
- Ensure workflow files are on the base branch
- Check GitHub Actions are enabled
- Verify Codacy project token is set

### Issue: Accidentally pushed to main

**Solution:**
- Revert the commit on main
- Create a new branch with the changes
- Open a proper PR

### Issue: Need urgent hotfix

**Solution:**
1. Create `hotfix/` branch from main
2. Make minimal necessary changes
3. Open expedited PR with "HOTFIX" label
4. Get quick review from available senior dev
5. Merge after passing checks

---

## Maintenance

### Regular Reviews

**Monthly:**
- Review and update CODEOWNERS
- Check branch protection rules
- Audit team member access levels
- Review merge statistics

**Quarterly:**
- Update required status checks
- Review and update quality gates
- Update documentation
- Team training on processes

---

## Quick Setup Checklist

Use this checklist to ensure everything is configured:

### Branch Protection
- [ ] Main branch protection enabled
- [ ] Develop branch protection enabled
- [ ] Require 1 approval minimum
- [ ] Require status checks
- [ ] Require conversation resolution
- [ ] Require linear history
- [ ] Restrict who can push

### Repository Settings
- [ ] Squash merge only enabled
- [ ] Auto-delete branches enabled
- [ ] Merge commits disabled
- [ ] Rebase merging disabled

### Access Control
- [ ] Team members added with correct roles
- [ ] Senior developers have Maintain access
- [ ] Regular developers have Write access
- [ ] CODEOWNERS file created (optional)

### Integrations
- [ ] Codacy connected and configured
- [ ] GitHub Actions enabled
- [ ] Status checks configured
- [ ] Secrets properly set

### Documentation
- [ ] CONTRIBUTING.md reviewed
- [ ] PR template tested
- [ ] Team trained on workflow

---

## Support & Resources

- **GitHub Branch Protection Docs**: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
- **GitHub Access Permissions**: https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
- **Codacy Integration**: https://docs.codacy.com/getting-started/integrating-codacy-with-your-git-workflow/

---

**Last Updated**: October 2025  
**Maintained By**: DevOps Team  
**Questions?** Open an issue or contact repository administrators.

