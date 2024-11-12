#!/bin/bash
echo "Starting application..."
cd /home/ubuntu/VA
pm2 restart 1
echo "Application restarted successfully."
