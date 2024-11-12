#!/bin/bash
echo "Starting application..."
cd /home/ubuntu/video-animations
pm2 restart 1
echo "Application restarted successfully."
