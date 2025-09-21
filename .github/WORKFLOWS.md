# GitHub Actions Workflows Documentation

This repository includes comprehensive GitHub Actions workflows for CI/CD, security, and release management.

## 🔄 Workflows Overview

### 1. **CI** (`.github/workflows/ci.yml`)
- **Purpose**: Continuous Integration with build, test, and lint checks
- **Triggers**: Push to main/master, Pull Requests, Manual dispatch
- **Features**:
  - Multi-Node.js version testing (20.x, 22.x)
  - Package manager detection (npm/yarn/pnpm)
  - ESLint, TypeScript, and Prettier checks
  - Test execution with coverage
  - Build verification
  - Artifact upload for debugging

### 2. **Lint & Code Quality** (`.github/workflows/lint.yml`)
- **Purpose**: Dedicated code quality and linting checks
- **Triggers**: Push to main/master, Pull Requests, Manual dispatch
- **Features**:
  - ESLint with zero warnings policy
  - Prettier formatting checks
  - TypeScript type checking
  - Next.js build verification
  - Security linting with audit checks

### 3. **Security Scan** (`.github/workflows/security.yml`)
- **Purpose**: Comprehensive security scanning
- **Triggers**: Push to main/master, Pull Requests, Weekly schedule, Manual dispatch
- **Features**:
  - Dependency vulnerability scanning (npm/yarn/pnpm audit)
  - CodeQL static analysis
  - Secret scanning (TruffleHog, GitLeaks)
  - Container security scanning (Trivy)
  - Security summary reporting

### 4. **E2E Tests** (`.github/workflows/e2e.yml`)
- **Purpose**: End-to-end testing
- **Triggers**: Pull Requests, Manual dispatch
- **Features**:
  - Playwright and Cypress support
  - Automatic browser installation
  - App startup and shutdown management
  - Test report artifact upload

### 5. **CodeQL** (`.github/workflows/codeql.yml`)
- **Purpose**: GitHub's static analysis security scanning
- **Triggers**: Push to main/master, Pull Requests, Weekly schedule
- **Features**:
  - JavaScript/TypeScript analysis
  - Security vulnerability detection
  - Results uploaded to GitHub Security tab

### 6. **Release Please** (`.github/workflows/release-please.yml`)
- **Purpose**: Automated semantic versioning and releases
- **Triggers**: Push to main/master, Manual dispatch
- **Features**:
  - Conventional Commits → semver
  - Automatic CHANGELOG generation
  - GitHub Release creation
  - Release PR management

### 7. **Package • Attach Assets** (`.github/workflows/package-on-tag.yml`)
- **Purpose**: Build and attach release assets
- **Triggers**: Tag push (v*.*.*), Manual dispatch
- **Features**:
  - Package manager detection
  - Production build
  - Asset packaging (.next/, dist/, build/)
  - Source snapshot creation
  - GitHub Release asset upload

## 🛠️ Configuration Files

### `audit-ci.json`
Configuration for security audit checks with moderate/high/critical vulnerability detection.

### `.github/RELEASE_NOTES_TEMPLATE.md`
Template for GitHub Release notes with highlights and changelog sections.

## 🔧 Key Features

### Package Manager Detection
All workflows automatically detect and use the appropriate package manager:
- **pnpm**: Detected by `pnpm-lock.yaml`
- **yarn**: Detected by `yarn.lock`
- **npm**: Default fallback

### Least-Privilege Permissions
Each workflow uses minimal required permissions:
- `contents: read` - For code checkout
- `contents: write` - For releases and artifacts
- `pull-requests: write` - For PR comments
- `security-events: write` - For security scanning results

### Concurrency Control
Workflows use concurrency groups to prevent duplicate runs and cancel in-progress jobs when new commits are pushed.

### Error Handling
- Graceful fallbacks for missing scripts
- Proper process cleanup in E2E tests
- Artifact upload with `if-no-files-found: ignore`
- Security scans continue even if some steps fail

## 🚀 Usage

### For Developers
1. **Push code** → CI, Lint, Security scans run automatically
2. **Create PR** → All checks run, E2E tests execute
3. **Use Conventional Commits** → Release Please creates release PRs

### For Releases
1. **Merge release PR** → Tag and GitHub Release created automatically
2. **Push tag manually** → Assets built and attached to release
3. **Check Security tab** → View CodeQL and security scan results

## 📊 Monitoring

### Badges
Update the badge URLs in `README.md` by replacing `OWNER/REPO` with your actual GitHub username/repository name:

```markdown
[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
```

### Artifacts
- **Coverage reports**: Available for 7 days
- **Build artifacts**: Available for 7 days
- **Security audit results**: Available for 30 days
- **Test reports**: Available for 7 days

## 🔒 Security Features

- **Dependency scanning**: Weekly and on every push
- **Secret detection**: Prevents credential leaks
- **Code analysis**: Static analysis for vulnerabilities
- **Container scanning**: Filesystem vulnerability detection
- **Audit trails**: All security events logged to GitHub Security tab

## 🐛 Troubleshooting

### Common Issues
1. **Build failures**: Check Node.js version compatibility
2. **Test timeouts**: Verify app startup in E2E workflow
3. **Security alerts**: Review audit results and update dependencies
4. **Release failures**: Ensure Conventional Commits format

### Debug Steps
1. Check workflow logs in GitHub Actions tab
2. Review artifact uploads for detailed reports
3. Verify package.json scripts are available
4. Ensure proper permissions are set