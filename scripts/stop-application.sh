#!/bin/bash
cd /home/ubuntu/VA || exit
pm2 stop all || exit 0  # Stop all PM2 processes (or specify app name)
