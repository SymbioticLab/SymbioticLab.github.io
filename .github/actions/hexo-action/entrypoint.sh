#!/bin/sh

set -e

# setup ssh-private-key
mkdir -p /root/.ssh/
echo "$INPUT_DEPLOY_KEY" > /root/.ssh/id_rsa
chmod 600 /root/.ssh/id_rsa
ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts

# setup deploy git account
git config --global user.name "$INPUT_USER_NAME"
git config --global user.email "$INPUT_USER_EMAIL"

# install hexo env
npm install hexo-cli -g
npm install hexo-deployer-git --save

# for reading the deployo branch
npm install js-yaml

# populate the deploy root with history
function get_branch() {
    local NODE_PATH=$(pwd)/node_modules
    echo $(env NODE_PATH=$NODE_PATH node /get_branch.js $1)
}
git clone --branch "$(get_branch _config.yml)" https://github.com/$GITHUB_REPOSITORY .deploy_git

# deployment
if [ "$INPUT_COMMIT_MSG" == "" ]
then
    hexo g -d
else
    hexo g -d -m "$INPUT_COMMIT_MSG"
fi

echo ::set-output name=notify::"Deploy complate."
