#!/bin/bash
echo "Starting application..."
cd /home/ubuntu/VA
pm2 restart 0
echo "Application restarted successfully."
