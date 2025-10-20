# GitHub Rulesets: Branch Protection Guide

GitHub Rulesets provide a powerful way to protect your most important branches by defining rules about deletions, force pushes, and push requirements like status checks and linear commit history.

---

## 📋 Table of Contents

1. [What are Rulesets?](#what-are-rulesets)
2. [Rulesets vs Branch Protection Rules](#rulesets-vs-branch-protection-rules)
3. [Creating Rulesets](#creating-rulesets)
4. [Configuration Examples](#configuration-examples)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 What are Rulesets?

**GitHub Rulesets** are a modern way to protect branches and control how code is merged into your repository.

### Key Benefits

✅ **More Flexible**: Apply rules to multiple branches with patterns  
✅ **Better Control**: Fine-grained permissions and bypass options  
✅ **Easier Management**: Centralized rule configuration  
✅ **Status Visibility**: Clear view of what rules apply where  
✅ **Insights**: Better analytics on rule enforcement  

### What Rulesets Can Do

- 🚫 **Prevent deletions** of important branches
- 🚫 **Block force pushes** that rewrite history
- ✅ **Require status checks** before merging
- ✅ **Enforce linear history** (no merge commits)
- ✅ **Require pull requests** with approvals
- ✅ **Require signed commits** for security
- ✅ **Require code reviews** from specific people/teams

---

## 🆚 Rulesets vs Branch Protection Rules

### Traditional Branch Protection Rules
- ❌ One rule per branch pattern
- ❌ Less flexible targeting
- ❌ Limited bypass options
- ✅ Simple to understand
- ✅ Works for basic needs

### Modern Rulesets
- ✅ Multiple branch patterns per ruleset
- ✅ Apply to tags too
- ✅ Fine-grained bypass permissions
- ✅ Better organization
- ✅ More powerful targeting
- ⚠️ Slightly more complex

**Recommendation**: Use Rulesets for new repositories. They're more powerful and future-proof.

---

## 🚀 Creating Rulesets

### Step-by-Step Guide

#### Step 1: Access Rulesets

1. Go to your repository: `https://github.com/Prabhuoffi/kamal-store`
2. Click **Settings** tab
3. In the left sidebar, under "Code and automation", click **Rules** → **Rulesets**
4. Click **New ruleset** → **New branch ruleset**

#### Step 2: Basic Configuration

**Ruleset Name:**
```
Main Branch Protection
```

**Enforcement status:**
- Select: **Active** (to enforce immediately)
- Or: **Evaluate** (to test without enforcing)

**Bypass list** (Optional):
- Add specific users, teams, or apps that can bypass rules
- Example: Repository administrators for emergency hotfixes
- **Recommendation**: Keep this list minimal

#### Step 3: Target Branches

**Branch targeting:**

Choose one of these options:

**Option A: Default Branch (Recommended for main)**
- Select: **Default branch**
- This automatically protects your default branch (usually `main`)

**Option B: Dynamic List (Recommended for multiple branches)**
- Select: **Dynamic list**
- Enter patterns:
  ```
  main
  develop
  release/*
  ```
  This protects all matching branches

**Option C: Include by Pattern**
- Pattern: `main`
- Pattern: `develop`
- Pattern: `release/**`

---

## ⚙️ Configuration Examples

### Example 1: Main Branch Ruleset (Production-Ready)

**Use Case**: Protect your production `main` branch

```yaml
Ruleset Name: Main Branch Protection
Status: Active
Target: Default branch (main)

Rules:
✅ Restrict deletions
✅ Restrict force pushes
✅ Require a pull request before merging
   - Required approvals: 1
   - Dismiss stale pull request approvals on new commits
   - Require review from Code Owners
✅ Require status checks to pass
   - Require branches to be up to date before merging
   - Status checks:
     • Code Quality Analysis
     • AI Code Review (Codacy)
     • Security Vulnerability Scan
     • Build Application
✅ Require conversation resolution before merging
✅ Require linear history
✅ Require signed commits (Optional but recommended)
✅ Block force pushes

Bypass: Only repository administrators (for emergency hotfixes)
```

#### How to Configure This:

1. **Go to** Settings → Rules → Rulesets → New branch ruleset

2. **General Settings:**
   - Name: `Main Branch Protection`
   - Enforcement status: **Active**
   - Bypass list: Add administrators (optional)

3. **Target Branches:**
   - Select: **Default branch**

4. **Branch Rules** - Enable these:

   **Restrict deletions:**
   - ✅ Check this box
   - Prevents branch deletion

   **Restrict force pushes:**
   - ✅ Check this box
   - Prevents rewriting history

   **Require a pull request before merging:**
   - ✅ Check this box
   - **Required approvals**: `1`
   - ✅ **Dismiss stale pull request approvals**
   - ✅ **Require review from Code Owners** (if you have CODEOWNERS file)
   - ✅ **Require approval of the most recent reviewable push**
   - ✅ **Require conversation resolution**

   **Require status checks to pass before merging:**
   - ✅ Check this box
   - ✅ **Require branches to be up to date**
   - **Add required status checks:**
     - Click "Add checks"
     - Enter: `Code Quality Analysis`
     - Enter: `AI Code Review (Codacy)`
     - Enter: `Security Vulnerability Scan`
     - Enter: `Build Application`

   **Require linear history:**
   - ✅ Check this box
   - Forces squash or rebase merging

   **Require deployments to succeed before merging:**
   - ⬜ Optional - Only if you have deployment workflows

   **Require signed commits:**
   - ✅ Recommended for security
   - Requires GPG/SSH commit signing

5. **Click** "Create" to save the ruleset

---

### Example 2: Development Branch Ruleset

**Use Case**: Protect `develop` branch with slightly relaxed rules

```yaml
Ruleset Name: Development Branch Protection
Status: Active
Target: Branch name includes "develop"

Rules:
✅ Restrict deletions
✅ Restrict force pushes
✅ Require a pull request before merging
   - Required approvals: 1
   - Allow bypassing for minor changes
✅ Require status checks to pass
   - Build must pass
   - Tests must pass
✅ Require linear history

Bypass: Maintainers and above
```

---

### Example 3: Release Branch Ruleset

**Use Case**: Protect all release branches (`release/*`)

```yaml
Ruleset Name: Release Branch Protection
Status: Active
Target: Include by pattern "release/**"

Rules:
✅ Restrict deletions
✅ Restrict force pushes
✅ Require a pull request before merging
   - Required approvals: 2 (stricter for releases)
   - Require review from release managers
✅ Require status checks to pass
   - All CI checks
   - Security scan
   - Performance tests
✅ Require signed commits
✅ Require linear history

Bypass: Release managers only
```

---

### Example 4: Feature Branch Ruleset

**Use Case**: Light protection for feature branches (`feature/*`)

```yaml
Ruleset Name: Feature Branch Protection
Status: Active
Target: Include by pattern "feature/**"

Rules:
✅ Restrict force pushes (after first push)
⬜ Restrict deletions (allow deletion after merge)
⬜ No PR required (developers can push directly)
✅ Require status checks to pass
   - Build must pass
   - Linting must pass

Bypass: All developers
```

---

## 📝 Detailed Rule Explanations

### Restrict Deletions
**What it does**: Prevents the branch from being deleted  
**When to use**: Always for `main`, `develop`, and `release/*`  
**Bypass**: Allow admins only

### Restrict Force Pushes
**What it does**: Prevents `git push --force`  
**Why important**: Protects commit history from being rewritten  
**When to use**: Always for protected branches  
**Note**: Can still allow for feature branches after squashing

### Require Pull Request Before Merging
**What it does**: All changes must go through a PR  
**Configuration options:**

- **Required approvals**: `1` minimum (use `2` for critical branches)
- **Dismiss stale approvals**: Re-approval needed after new commits
- **Require Code Owner review**: Specific people must approve
- **Require most recent push approval**: Last commit must be approved

**Best Practice**: Always require at least 1 approval for `main`

### Require Status Checks
**What it does**: Automated checks must pass before merge  
**Common checks:**

```
✅ Build Application
✅ Code Quality Analysis
✅ AI Code Review (Codacy)
✅ Security Vulnerability Scan
✅ Test Suite
✅ Linting
```

**Configuration:**
- ✅ **Require branches to be up to date**: Ensures latest code tested

### Require Conversation Resolution
**What it does**: All PR comments must be resolved  
**Why important**: Ensures feedback is addressed  
**Best Practice**: Always enable for `main` and `develop`

### Require Linear History
**What it does**: Only allows squash merge or rebase  
**Benefits:**
- Clean, linear commit history
- Easier to understand project timeline
- Simpler to revert changes
- Better for `git bisect`

**Best Practice**: Enable for all protected branches

### Require Signed Commits
**What it does**: All commits must be cryptographically signed  
**Benefits:**
- Verifies commit author identity
- Prevents commit spoofing
- Enhances security

**Setup Required:**
```bash
# Configure GPG signing
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
```

---

## 🎨 Visual Configuration Guide

### Creating Main Branch Ruleset (Screenshot Guide)

```
┌─────────────────────────────────────────────────────────┐
│ New branch ruleset                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Ruleset Name                                           │
│ ┌─────────────────────────────────────────┐           │
│ │ Main Branch Protection                  │           │
│ └─────────────────────────────────────────┘           │
│                                                         │
│ Enforcement status                                      │
│ ○ Disabled    ● Active    ○ Evaluate                  │
│                                                         │
│ Bypass list (optional)                                  │
│ ┌─────────────────────────────────────────┐           │
│ │ + Add bypass                            │           │
│ └─────────────────────────────────────────┘           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ Target branches                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ● Default branch                                       │
│ ○ Dynamic list using patterns                          │
│ ○ Include by pattern                                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ Branch protections                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ☑ Restrict deletions                                  │
│ ☑ Restrict force pushes                               │
│ ☑ Require a pull request before merging               │
│   Required approvals: [1]                              │
│   ☑ Dismiss stale pull request approvals              │
│   ☑ Require review from Code Owners                   │
│   ☑ Require conversation resolution                    │
│                                                         │
│ ☑ Require status checks to pass before merging        │
│   ☑ Require branches to be up to date                 │
│   Status checks that are required:                     │
│   • Code Quality Analysis                              │
│   • AI Code Review (Codacy)                            │
│   • Security Vulnerability Scan                        │
│   • Build Application                                  │
│                                                         │
│ ☑ Require linear history                              │
│ ☑ Require signed commits                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                         [Create]  [Cancel]              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Best Practices

### 1. Start with Main Branch
- Create ruleset for `main` branch first
- Test thoroughly before adding more rules
- Ensure team understands the workflow

### 2. Use Meaningful Names
```
✅ Good:
- "Main Branch Protection"
- "Development Branch Rules"
- "Release Branch Security"

❌ Bad:
- "Ruleset 1"
- "New ruleset"
- "Test"
```

### 3. Gradual Implementation
```
Week 1: Enable on main with basic rules
Week 2: Add status check requirements
Week 3: Extend to develop branch
Week 4: Add signed commit requirement
```

### 4. Document Bypass Reasons
```
When bypassing rules, document:
- Who bypassed
- Why bypass was needed
- What was changed
- When normal process will resume
```

### 5. Regular Audits
- Monthly: Review who can bypass rules
- Quarterly: Review if rules are still appropriate
- Yearly: Major review of entire ruleset strategy

### 6. Communicate Changes
```
✅ Before enabling strict rules:
- Announce to team
- Provide documentation
- Offer training session
- Have grace period
```

---

## 🔍 Verification Checklist

After creating rulesets, verify they work:

### Test 1: Try Direct Push
```bash
git checkout main
echo "test" >> test.txt
git commit -am "test direct push"
git push origin main
```
**Expected**: ❌ Push rejected

### Test 2: Try Force Push
```bash
git push --force origin main
```
**Expected**: ❌ Force push rejected

### Test 3: Try Branch Deletion
```bash
git push origin --delete main
```
**Expected**: ❌ Deletion rejected

### Test 4: Create PR Without Approval
- Create valid PR
- Try to merge without approval
**Expected**: ❌ Merge button disabled

### Test 5: Create PR With Failing Check
- Create PR with lint errors
- Try to merge
**Expected**: ❌ Cannot merge (checks failing)

### Test 6: Valid PR Process
- Create PR with all rules satisfied
- Get required approval
- All checks pass
**Expected**: ✅ Can merge successfully

---

## 🐛 Troubleshooting

### Issue: Can't Create PR

**Symptoms**: PR creation fails or shows errors

**Solutions:**
1. Check if target branch matches ruleset pattern
2. Verify you have write access to repository
3. Ensure branch is up to date
4. Check for merge conflicts

### Issue: Merge Button Disabled

**Symptoms**: Cannot merge even with approval

**Solutions:**
1. ✅ All required status checks passed?
2. ✅ Required number of approvals received?
3. ✅ All conversations resolved?
4. ✅ Branch up to date with base?
5. ✅ No merge conflicts?
6. ✅ Linear history requirement met?

### Issue: Status Checks Not Appearing

**Symptoms**: Required checks don't show up

**Solutions:**
1. Ensure workflow files are on base branch
2. Check workflow names match exactly
3. Verify GitHub Actions are enabled
4. Wait 2-3 minutes for checks to appear
5. Check Actions tab for workflow errors

### Issue: Bypass Not Working

**Symptoms**: User in bypass list still blocked

**Solutions:**
1. Verify user/team added correctly to bypass list
2. Check enforcement status is "Active"
3. Ensure user has appropriate repository permissions
4. Try refreshing browser/clearing cache

### Issue: Rules Not Applying

**Symptoms**: Can push directly to protected branch

**Solutions:**
1. Check enforcement status is "Active" (not "Evaluate")
2. Verify branch name matches target pattern exactly
3. Ensure ruleset is saved and published
4. Check for conflicting rulesets
5. Verify you're not in bypass list

---

## 📊 Monitoring & Analytics

### Where to View Ruleset Activity

1. **Go to** Settings → Rules → Rulesets
2. **Click on** a ruleset name
3. **View:**
   - How many branches it applies to
   - Recent bypass events
   - Rule enforcement statistics

### What to Monitor

**Weekly:**
- Number of PRs blocked by rules
- Bypass usage (should be rare)
- Failed status checks trends

**Monthly:**
- Average time to merge
- Approval patterns
- Most common rule violations

---

## 🚀 Advanced Configurations

### Multiple Rulesets Strategy

**Recommended Setup:**

```
1. Critical Protection (main)
   - Strictest rules
   - Minimal bypass
   
2. Standard Protection (develop, release/*)
   - Moderate rules
   - Team bypass allowed

3. Feature Protection (feature/*)
   - Basic rules
   - Liberal bypass

4. Hotfix Exception (hotfix/*)
   - Relaxed rules
   - Quick merge path
```

### Example: Complete Ruleset Matrix

| Branch Pattern | Deletions | Force Push | PR Required | Approvals | Status Checks | Linear History |
|---------------|-----------|------------|-------------|-----------|---------------|----------------|
| `main` | ✅ Block | ✅ Block | ✅ Yes | 1 | ✅ All | ✅ Yes |
| `develop` | ✅ Block | ✅ Block | ✅ Yes | 1 | ✅ Basic | ✅ Yes |
| `release/**` | ✅ Block | ✅ Block | ✅ Yes | 2 | ✅ All | ✅ Yes |
| `feature/**` | ⬜ Allow | ⚠️ Warn | ⬜ No | 0 | ✅ Build | ⬜ No |
| `hotfix/**` | ⬜ Allow | ✅ Block | ✅ Yes | 1 | ✅ Critical | ✅ Yes |

---

## 📚 Additional Resources

### Official Documentation
- [GitHub Rulesets Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [Managing Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository)

### Related Guides in This Repo
- [`BRANCH_PROTECTION_SETUP.md`](./BRANCH_PROTECTION_SETUP.md) - Traditional branch protection
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) - Development workflow
- [`IMPLEMENTATION_GUIDE.md`](./IMPLEMENTATION_GUIDE.md) - Complete setup guide

---

## 📞 Getting Help

**Having issues with rulesets?**

1. Check this guide's troubleshooting section
2. Review GitHub's official documentation
3. Check repository Settings → Rules → Rulesets for current configuration
4. Contact repository administrators
5. Create an issue with the `question` label

---

## 🎯 Quick Start Checklist

Ready to implement? Use this checklist:

- [ ] Read this entire guide
- [ ] Announce to team about upcoming changes
- [ ] Create "Main Branch Protection" ruleset
- [ ] Set enforcement status to "Evaluate" first
- [ ] Test with a few PRs
- [ ] Gather team feedback
- [ ] Adjust rules based on feedback
- [ ] Change enforcement to "Active"
- [ ] Create additional rulesets for other branches
- [ ] Document any custom rules or exceptions
- [ ] Train team on new workflow
- [ ] Monitor and adjust as needed

---

**Congratulations!** You now have comprehensive branch protection using GitHub Rulesets. Your code is more secure, and your development process is more controlled. 🎉

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Maintained By**: DevOps Team

