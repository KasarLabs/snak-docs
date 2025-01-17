#!/bin/bash

# Get the root directory (parent of scripts)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Change to root directory
cd "$ROOT_DIR"

# Start the server
npx http-server build/site -c-1