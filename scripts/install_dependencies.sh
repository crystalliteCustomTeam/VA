#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

echo "Starting install phase..."

# Navigate to the project directory
echo "Changing to project directory..."
cd /home/ubuntu/VA || { echo "Directory /home/ubuntu/VA does not exist"; exit 1; }

# Pull the latest code from Git
echo "Pulling latest code from Git..."
git pull || { echo "Git pull failed"; exit 1; }

# Install npm dependencies
echo "Installing npm dependencies..."
npm install || { echo "npm install failed"; exit 1; }

# Build the project
echo "Building the project..."
npm run build || { echo "npm run build failed"; exit 1; }

echo "Install phase completed successfully."
