cd /home/ubuntu/cm-deployment-testing
git pull origin main
npm install
pm2 restart app_name || pm2 start index.js --name app_name