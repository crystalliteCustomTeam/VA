#!/bin/bash
cd /home/ubuntu/video-animations
git pull
npm install &&
npm run build &&
pm2 restart 1