#!/bin/bash

# Get the root directory (parent of scripts)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Change to root directory
cd "$ROOT_DIR"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install @antora/cli @antora/site-generator
    npm install @antora/lunr-extension
fi

# Build the site
echo "Building documentation..."
npx antora playbook.yml --fetch

# Check build status
if [ $? -eq 0 ]; then
    echo "Documentation built successfully!"
    echo "Run './scripts/server.sh' to start the local server"
else
    echo "Build failed. Please check the error messages above."
fi