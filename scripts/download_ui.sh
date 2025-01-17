#!/bin/bash

# Get the root directory (parent of scripts)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Change to root directory
cd "$ROOT_DIR"

# Create ui directory if it doesn't exist
mkdir -p ui/build

# Download the UI bundle
curl -L https://github.com/antora/antora-ui-default/releases/download/v1.0.0/ui-bundle.zip -o ui/build/ui-bundle.zip

# Check if download was successful
if [ $? -eq 0 ]; then
    echo "UI bundle downloaded successfully"
    # Update playbook.yml to use local UI bundle
    sed -i '' 's|url: https://github.com/antora/antora-ui-default/releases/download/v1.0.0/ui-bundle.zip|url: ui/build/ui-bundle.zip|' playbook.yml
else
    echo "Failed to download UI bundle"
    exit 1
fi