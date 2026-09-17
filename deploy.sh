#!/bin/zsh
# Rebuild CodeFix and push to GitHub Pages (repo: Lewis-goat/codefix-coffee).
# Usage: zsh ~/niche-site/deploy.sh
set -e
cd "$(dirname "$0")/site"

SITE_URL=https://codefixcoffee.com \
ADSENSE_CLIENT=ca-pub-9660119725457689 \
CONTACT_EMAIL=hello@codefixcoffee.com \
npm run build

WORK=/tmp/ccf-deploy
rm -rf "$WORK"
git clone -q --single-branch -b main https://github.com/Lewis-goat/codefix-coffee.git "$WORK"
cd "$WORK"
git rm -rq . 2>/dev/null || true
cp -r "$OLDPWD/dist"/* .
git add -A
git commit -q -m "Rebuild $(date +%F-%H%M)"
git pull --rebase -q origin main 2>/dev/null || true
git push -q origin main
echo "Pushed. Pages build: https://github.com/Lewis-goat/codefix-coffee/deployments"
