#!/bin/bash
cd /home/ubuntu/VA || exit

cd /home/ubuntu/VA || exit
if [ -f /home/ubuntu/VA/styles/about/banner.module.scss ]; then
  echo "File exists, deleting: banner.module.scss"
  rm -f /home/ubuntu/VA/styles/about/banner.module.scss
fi

git pull 
