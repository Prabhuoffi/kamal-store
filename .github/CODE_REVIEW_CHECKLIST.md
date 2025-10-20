# Code Review Checklist

Use this checklist when reviewing pull requests to ensure comprehensive and consistent code reviews.

---

## Quick Reference

**Review Priority:**
1. ❗ **Critical**: Security, data loss, breaking changes
2. ⚠️ **Important**: Logic errors, performance issues
3. 💡 **Suggestions**: Code quality, best practices
4. ℹ️ **Nitpicks**: Style, formatting (should be caught by linters)

---

## Pre-Review Checks

Before diving into the code, verify:

- [ ] PR description is clear and complete
- [ ] Related issues are linked (Fixes #123)
- [ ] PR follows semantic title convention (feat:, fix:, etc.)
- [ ] All automated checks have passed
- [ ] No merge conflicts exist
- [ ] Branch is up to date with base branch

---

## Code Quality Review

### Logic & Correctness
- [ ] Code logic is correct and handles edge cases
- [ ] No obvious bugs or logical errors
- [ ] Algorithms are efficient and appropriate
- [ ] Proper null/undefined checks
- [ ] Error conditions are handled properly

### Code Organization
- [ ] Code is well-structured and organized
- [ ] Functions are small and focused (single responsibility)
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Proper separation of concerns
- [ ] Components are properly modularized

### Readability & Maintainability
- [ ] Code is easy to read and understand
- [ ] Variable and function names are descriptive
- [ ] Complex logic has explanatory comments
- [ ] Magic numbers are replaced with named constants
- [ ] Code follows project conventions

### React-Specific (if applicable)
- [ ] Components follow React best practices
- [ ] Proper use of hooks (useEffect, useState, etc.)
- [ ] No unnecessary re-renders
- [ ] PropTypes or TypeScript types defined
- [ ] Props are validated
- [ ] State management is appropriate
- [ ] Event handlers are properly bound
- [ ] Keys are used correctly in lists

---

## Security Review

### Critical Security Checks
- [ ] No hardcoded credentials or secrets
- [ ] User input is properly validated and sanitized
- [ ] No SQL injection vulnerabilities
- [ ] No XSS (Cross-Site Scripting) vulnerabilities
- [ ] Authentication/authorization properly implemented
- [ ] Sensitive data is encrypted
- [ ] API endpoints are secured
- [ ] CORS is properly configured

### Data Handling
- [ ] PII (Personally Identifiable Information) is protected
- [ ] Data validation on both client and server
- [ ] Proper error messages (no sensitive info leaked)
- [ ] Secure data transmission (HTTPS)

---

## Performance Review

### Performance Considerations
- [ ] No unnecessary API calls or database queries
- [ ] Efficient algorithms used (appropriate time complexity)
- [ ] Images are optimized and lazy-loaded
- [ ] No memory leaks (event listeners cleaned up)
- [ ] Proper use of caching where appropriate
- [ ] Bundle size impact is acceptable
- [ ] No blocking operations on main thread

### React Performance (if applicable)
- [ ] Expensive operations are memoized (useMemo)
- [ ] Components are memoized where appropriate (React.memo)
- [ ] Large lists use virtualization if needed
- [ ] useCallback used for expensive function props

---

## Testing Review

### Test Coverage
- [ ] Unit tests added for new functionality
- [ ] Edge cases are tested
- [ ] Error conditions are tested
- [ ] Test coverage maintained or improved
- [ ] Tests are meaningful (not just for coverage)
- [ ] Mock data is realistic
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)

### Test Quality
- [ ] Tests are readable and well-organized
- [ ] Test names clearly describe what is being tested
- [ ] Tests are independent (no interdependencies)
- [ ] Tests are deterministic (no flaky tests)
- [ ] Integration tests for complex flows

---

## Documentation Review

### Code Documentation
- [ ] Complex functions have JSDoc comments
- [ ] Public APIs are documented
- [ ] PropTypes/TypeScript types serve as documentation
- [ ] README updated if needed
- [ ] Breaking changes are documented
- [ ] Migration guide provided (if breaking changes)

### Comments
- [ ] Comments explain "why", not "what"
- [ ] No commented-out code
- [ ] TODOs have issue numbers/context
- [ ] No placeholder comments left

---

## UI/UX Review (if applicable)

### User Interface
- [ ] UI matches design specifications
- [ ] Layout is responsive across devices
- [ ] Colors and fonts are consistent
- [ ] Loading states are handled
- [ ] Error states are user-friendly
- [ ] Success feedback is provided

### Accessibility
- [ ] Semantic HTML elements used
- [ ] Proper ARIA labels and roles
- [ ] Keyboard navigation works correctly
- [ ] Sufficient color contrast
- [ ] Screen reader friendly
- [ ] Focus states are visible
- [ ] Alt text for images

### User Experience
- [ ] User flow is intuitive
- [ ] Loading times are acceptable
- [ ] Error messages are helpful
- [ ] Forms have proper validation feedback
- [ ] No unexpected behavior

---

## API & Data Review

### API Integration
- [ ] API endpoints are RESTful (or GraphQL best practices)
- [ ] Proper HTTP methods used (GET, POST, PUT, DELETE)
- [ ] Error responses are handled appropriately
- [ ] API versioning considered
- [ ] Rate limiting handled
- [ ] Timeouts configured

### Data Flow
- [ ] Data flow is clear and predictable
- [ ] State management is appropriate
- [ ] No prop drilling issues
- [ ] Data transformations are necessary and clear
- [ ] Side effects are handled properly

---

## CSS & Styling Review

### CSS Quality
- [ ] CSS follows project conventions (BEM, CSS Modules, etc.)
- [ ] No inline styles (unless necessary)
- [ ] Styles are scoped appropriately
- [ ] No duplicate or redundant styles
- [ ] CSS selectors are efficient
- [ ] Animations are performant
- [ ] Cross-browser compatibility considered

### Responsive Design
- [ ] Mobile-first approach (if applicable)
- [ ] Breakpoints are appropriate
- [ ] Layout adapts to different screen sizes
- [ ] Touch targets are appropriately sized

---

## Git & Version Control

### Commits
- [ ] Commit messages follow conventions
- [ ] Commits are logical and atomic
- [ ] No unnecessary commits
- [ ] No accidentally committed files

### Branch Management
- [ ] Branch name follows conventions
- [ ] Branch is up to date with base
- [ ] No unnecessary merge commits

---

## Deployment & DevOps

### Build & Deploy
- [ ] Build passes successfully
- [ ] No new warnings introduced
- [ ] Environment variables properly used
- [ ] Configuration for different environments
- [ ] Database migrations included (if needed)
- [ ] Rollback plan considered

### Dependencies
- [ ] New dependencies are necessary
- [ ] Dependencies are from trusted sources
- [ ] No security vulnerabilities in dependencies
- [ ] Lock files are updated

---

## Review Comments Guidelines

### Writing Effective Comments

**Use Prefixes:**
- `❗ CRITICAL:` Must be fixed before merge
- `⚠️ IMPORTANT:` Should be fixed before merge
- `💡 SUGGESTION:` Consider this improvement
- `❓ QUESTION:` Needs clarification
- `ℹ️ NITPICK:` Minor style issue
- `✅ APPROVED:` Looks good
- `📝 NOTE:` General observation

**Example Comments:**

```markdown
❗ CRITICAL: This endpoint is missing authentication. 
Please add auth middleware before merging.

⚠️ IMPORTANT: This query could be slow with large datasets. 
Consider adding pagination or indexing the database.

💡 SUGGESTION: Consider using `useMemo` here to avoid 
recalculating this value on every render.

❓ QUESTION: Why did we choose this approach over [alternative]?
Is there a specific reason?

ℹ️ NITPICK: Consider using const instead of let here 
since the value never changes.

✅ APPROVED: Great implementation! Clean and well-tested.

📝 NOTE: We might want to extract this into a utility 
function in the future for reusability.
```

### Being Constructive

**Good:**
```
💡 SUGGESTION: Consider extracting this validation logic into
a separate function for better reusability. Something like:

function validateUserInput(input) {
  // validation logic here
}

This would also make it easier to test.
```

**Bad:**
```
This is wrong. Fix it.
```

---

## Post-Review Actions

### After Reviewing

- [ ] Leave clear, actionable comments
- [ ] Approve PR if all critical issues are addressed
- [ ] Request changes if critical issues exist
- [ ] Acknowledge good practices and clean code
- [ ] Be available for follow-up questions

### Follow-Up

- [ ] Re-review after author makes changes
- [ ] Verify all comments are addressed
- [ ] Check new commits don't introduce issues
- [ ] Approve when satisfied
- [ ] Thank the author for their contribution

---

## Quick Decision Guide

### When to APPROVE ✅
- All critical and important issues resolved
- Code meets project standards
- Tests are comprehensive
- Documentation is adequate
- Minor suggestions can be addressed later

### When to REQUEST CHANGES ⚠️
- Critical security issues
- Logic errors or bugs
- Missing tests for critical functionality
- Breaking changes without migration path
- Significant performance concerns

### When to COMMENT 💬
- Minor suggestions
- Questions for clarification
- Acknowledge good practices
- Provide additional context

---

## Reviewer Self-Check

Before submitting your review, ask yourself:

- [ ] Are my comments clear and actionable?
- [ ] Am I being constructive and respectful?
- [ ] Have I explained the "why" behind my suggestions?
- [ ] Have I acknowledged good code and practices?
- [ ] Are my concerns legitimate or just personal preference?
- [ ] Would I be comfortable implementing my suggestions?

---

## Time Estimates

**Small PR (< 200 lines):** 15-30 minutes  
**Medium PR (200-500 lines):** 30-60 minutes  
**Large PR (> 500 lines):** 1-2 hours  

**Note:** If a PR takes longer than 2 hours to review, suggest breaking it into smaller PRs.

---

## Resources

- [Google's Code Review Guidelines](https://google.github.io/eng-practices/review/)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)
- [OWASP Security Guidelines](https://owasp.org/www-project-code-review-guide/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember:** The goal of code review is to:
1. Ensure code quality and maintainability
2. Share knowledge across the team
3. Catch bugs before they reach production
4. Foster a culture of continuous improvement

**Be kind, be thorough, be constructive.** 🚀

