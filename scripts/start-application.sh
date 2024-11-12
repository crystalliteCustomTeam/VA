#!/bin/bash
cd /home/ubuntu/VA || exit
pm2 start npm --name "nextjs-app" -- run start
