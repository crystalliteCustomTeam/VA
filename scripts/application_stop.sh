#!/bin/bash
echo "Stopping existing application..."
pm2 stop 0 || echo "Application was not running"
