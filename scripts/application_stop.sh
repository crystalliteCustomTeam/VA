#!/bin/bash
echo "Stopping existing application..."
pm2 stop 1 || echo "Application was not running"
