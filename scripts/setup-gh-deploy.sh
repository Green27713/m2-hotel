#!/bin/bash
# Reconstructs the GitHub deploy key from the SSH_DEPLOY_KEY secret.
# Run this before any git push: bash scripts/setup-gh-deploy.sh && git push ...
set -e
if [ -z "$SSH_DEPLOY_KEY" ]; then
  echo "ERROR: SSH_DEPLOY_KEY secret is not set. Add it in Replit Secrets (padlock icon)."
  exit 1
fi
mkdir -p ~/.ssh
echo "$SSH_DEPLOY_KEY" | base64 -d > ~/.ssh/m2hotel_deploy
chmod 600 ~/.ssh/m2hotel_deploy
cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/m2hotel_deploy
  StrictHostKeyChecking no
EOF
chmod 600 ~/.ssh/config
echo "SSH deploy key ready."
