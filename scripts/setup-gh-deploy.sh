#!/bin/bash
# Reconstructs the GitHub deploy SSH key from .local/ssh/deploy_key (gitignored, workspace-persistent).
# Run before any git push: bash scripts/setup-gh-deploy.sh && git push ...
set -e
KEY_FILE="$(dirname "$0")/../.local/ssh/deploy_key"
if [ ! -f "$KEY_FILE" ]; then
  echo "ERROR: Deploy key not found at .local/ssh/deploy_key"
  exit 1
fi
mkdir -p ~/.ssh
cp "$KEY_FILE" ~/.ssh/m2hotel_deploy
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
