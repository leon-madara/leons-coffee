#!/bin/bash
echo "Removing all Git files and history..."

# Remove the .git folder (this deletes all Git history)
rm -rf .git

# Remove the .gitignore file (if present)
rm -f .gitignore

echo "All Git files have been removed."
