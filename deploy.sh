#!/usr/bin/env sh

# abort on errors
set -e

# install
npm i

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init --initial-branch=main
git config user.name "Kévin Morpain" && git config user.email "kevmorpain@gmail.com"
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kevmorpain/jdrave-app.git main:gh-pages

cd -