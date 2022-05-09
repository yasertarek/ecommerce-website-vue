#!/usr/bin/en sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m "new Deployment"

git push -f git@github.com:yasertarek/ecommerce-website-vue.git master:gh-pages
