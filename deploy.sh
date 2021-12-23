rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:yichang8421/forest-ui.git &&
git push -f -u origin master &&
cd -
echo https://yichang8421.gitee.io/forest-ui/index.html