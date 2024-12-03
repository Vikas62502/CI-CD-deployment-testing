CI/CD Pipeline for Deploying to EC2
This repository uses GitHub Actions to automate the deployment process to an Amazon EC2 instance. Below is an explanation of the workflow and steps involved.

Workflow Overview
The workflow is triggered whenever there is a push to the main branch. It performs the following actions:

Checkout Code: Pulls the latest changes from the repository.
Set up SSH: Configures SSH to securely connect to the EC2 instance using a private key stored in GitHub secrets.
Run Deployment Script: Executes a deployment script (deploy.sh) located on the EC2 instance to handle the application deployment process.
Prerequisites
1. EC2 Instance Configuration
Ensure the EC2 instance is set up with:

An accessible public IP or domain.
The deployment script (deploy.sh) located at /home/ubuntu/.
2. GitHub Secrets
Add the following secrets to your repository under Settings > Secrets and variables > Actions:

EC2_SSH_KEY: Private key for SSH authentication.
EC2_USER: SSH username for the EC2 instance (e.g., ubuntu).
EC2_HOST: Public IP or domain name of the EC2 instance.
3. Deployment Script (deploy.sh)
Ensure your deploy.sh script handles the necessary steps to pull the latest changes and restart the application on the EC2 instance. Example script:

bash
Copy code
#!/bin/bash

# Navigate to the application directory
cd /path/to/your/application

# Pull the latest changes
git pull origin main

# Restart the application
# Example for a Node.js app:
pm2 restart app
GitHub Actions Workflow
The workflow file is located at .github/workflows/deploy.yml and is defined as follows:

yaml
Copy code
name: Deploy to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the repository code
      - name: Checkout Code
        uses: actions/checkout@v3

      # Step 2: Set up SSH to connect to EC2
      - name: Set up SSH
        uses: webfactory/ssh-agent@v0.5.3
        with:
          ssh-private-key: ${{ secrets.EC2_SSH_KEY }}

      # Step 3: Run the deploy script on the EC2 instance
      - name: Run Deploy Script on EC2
        run: |
          ssh -o StrictHostKeyChecking=no ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} 'bash /home/ubuntu/deploy.sh'
How It Works
Push your changes to the main branch.
GitHub Actions will automatically trigger the deployment workflow.
The workflow securely connects to your EC2 instance and executes the deploy.sh script.
The application is updated and restarted based on the script's instructions.
Troubleshooting
Permission Denied Error: Ensure the correct private key is added to the EC2_SSH_KEY secret and the EC2 instance's authorized_keys.
Strict Host Key Checking: If you encounter host key verification issues, ensure StrictHostKeyChecking=no is included in the SSH command.
Script Execution Issues: Verify that deploy.sh is executable (chmod +x deploy.sh) and correctly configured.
License
This project is licensed under the MIT License.
