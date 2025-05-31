#!/bin/bash
# WARNING: This script will permanently remove your git history and all .git data.
echo "Cleaning up existing Git history and temporary files..."

# Remove the .git folder entirely
rm -rf .git

# Remove any untracked files and directories (if needed)
git clean -fdx 2>/dev/null || true

# Reinitialize a new git repository
git init
git add .
git commit -m "Initial commit after cleaning up git history and temporary files"

echo "Git cleanup complete. A new repository has been initialized."
