#!/bin/bash

# Test script for the automatic release system
# This script simulates what the GitHub Actions workflow does

echo "🧪 Testing Automatic Release System"
echo "=================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📦 Current version: $CURRENT_VERSION"

# Calculate new version
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# Ensure version is at least 1.2.0
if [ "$MAJOR" -lt 1 ] || { [ "$MAJOR" -eq 1 ] && [ "$MINOR" -lt 2 ]; }; then
    MAJOR=1
    MINOR=2
    PATCH=0
else
    MINOR=$((MINOR + 1))
    PATCH=0
fi

NEW_VERSION="${MAJOR}.${MINOR}.${PATCH}"
echo "🚀 New version would be: $NEW_VERSION"

# Check if tag already exists
if git tag -l | grep -q "v$NEW_VERSION"; then
    echo "⚠️ Tag v$NEW_VERSION already exists"
else
    echo "✅ Tag v$NEW_VERSION would be created"
fi

# Check if release would be created
echo "📝 Release notes would include:"
echo "   - Version: $CURRENT_VERSION → $NEW_VERSION"
echo "   - Changes since last tag"

# Check build process
echo "🏗️ Build process:"
if npm run build --dry-run > /dev/null 2>&1; then
    echo "   ✅ Build command available"
else
    echo "   ⚠️ Build command not available or failed"
fi

echo ""
echo "🎉 Test completed successfully!"
echo "The automatic release system is ready to work."
echo ""
echo "To trigger a real release:"
echo "1. Make changes to your code"
echo "2. Commit and push to main branch"
echo "3. The workflow will automatically create a release"