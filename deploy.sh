#!/bin/bash

# Navigate to the correct directory where your repository is located
cd /home/ubuntu/climate-mitigate-backend  # Adjust as needed

# Pull the latest changes from GitHub
git pull origin main

# Install any new dependencies
npm install

# Restart the application with PM2
pm2 restart app_name || pm2 start index.js --name app_name
