#!/bin/bash
cd /home/ubuntu/VA

# Reset any changes that are not committed
git reset --hard HEAD

# Clean any untracked files (optional)
git clean -fd

# Optionally, remove specific conflicting files (like banner.module.scss)
sudo rm -f /home/ubuntu/VA/styles/about/banner.module.scss
sudo rm -f /home/ubuntu/VA/styles/about/bannerclients.module.scss


git pull 
