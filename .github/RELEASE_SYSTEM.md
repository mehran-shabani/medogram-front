# 🚀 Automatic Release System

This document explains how the automatic release system works in this repository.

## Overview

The repository now has a simplified and reliable automatic release system that creates releases automatically whenever changes are pushed to the main branch.

## How It Works

### 1. Automatic Release Workflow (`auto-release-any-change.yml`)

**Trigger:** Every push to `main` or `master` branch

**Process:**
1. **Version Bumping**: Automatically increments the minor version (e.g., 1.4.0 → 1.5.0)
2. **Build Process**: Runs the build command to ensure the project compiles
3. **Tag Creation**: Creates a Git tag with the new version (e.g., `v1.5.0`)
4. **Release Creation**: Creates a GitHub release with:
   - Detailed release notes
   - Change log from the last release
   - Build information
   - Commit details

### 2. Asset Packaging (`package-on-tag.yml`)

**Trigger:** When a tag is pushed (automatically triggered by the release workflow)

**Process:**
1. **Build Assets**: Creates build artifacts (dist, build, .next, etc.)
2. **Package Creation**: Creates ZIP files for different build outputs
3. **Asset Upload**: Attaches the packaged assets to the GitHub release

## Version Management

- **Current Version**: 1.4.0 (as of last update)
- **Version Format**: Semantic versioning (MAJOR.MINOR.PATCH)
- **Auto-increment**: Minor version is automatically incremented on each release
- **Minimum Version**: Ensures version is at least 1.2.0

## Release Notes Format

Each release includes:
- 🚀 Release title and version
- 📝 List of changes since last release
- ℹ️ Version information (previous → new)
- 📅 Release date and time
- 🔗 Build information (commit, branch, workflow)
- ⚠️ Automatic generation notice

## Testing the System

Use the test workflow to verify the release system:

1. Go to **Actions** tab in GitHub
2. Select **Test Release System** workflow
3. Click **Run workflow**
4. Enter a test version (e.g., `1.5.0-test`)
5. The workflow will:
   - Create a test tag
   - Create a test release
   - Verify it works
   - Clean up the test release

## Disabled Workflows

The following workflows have been disabled to prevent conflicts:
- `auto-release.yml.disabled` - Complex quality gate system
- `release-pipeline.yml.disabled` - Release Please workflow
- `release-please.yml.disabled` - Legacy Release Please

## Manual Release

If you need to create a manual release:

1. **Update version** in `package.json`
2. **Commit and push** to main branch
3. **Automatic release** will be created

## Troubleshooting

### Release Not Created
- Check if the workflow ran successfully
- Verify the build step passed
- Check GitHub Actions logs for errors

### Version Not Incremented
- Ensure you're pushing to `main` or `master` branch
- Check if the workflow is enabled
- Verify `package.json` has a valid version format

### Assets Not Attached
- Check if the `package-on-tag.yml` workflow ran
- Verify build artifacts were created
- Check the workflow logs for packaging errors

## Workflow Files

- `auto-release-any-change.yml` - Main release workflow
- `package-on-tag.yml` - Asset packaging workflow  
- `test-release.yml` - Test workflow for verification

## Benefits

✅ **Automatic**: No manual intervention required  
✅ **Reliable**: Simple, focused workflow  
✅ **Consistent**: Same process every time  
✅ **Informative**: Detailed release notes  
✅ **Testable**: Built-in test workflow  
✅ **Clean**: No conflicting workflows  

---

*This system ensures that every change to the main branch automatically creates a proper release with assets and documentation.*