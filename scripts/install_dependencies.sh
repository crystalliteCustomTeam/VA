#!/bin/bash
cd /home/ubuntu/VA  # Navigate to your app's directory
git fetch --all  # Fetch the latest changes
git reset --hard origin/main  # Reset any local changes to match the remote
git pull origin main  # Pull the latest changes from the main branch