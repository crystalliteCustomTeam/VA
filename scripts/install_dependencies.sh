#!/bin/bash
echo "Starting install phase..."
cd /home/ubuntu/VA
git pull
npm install
npm run build