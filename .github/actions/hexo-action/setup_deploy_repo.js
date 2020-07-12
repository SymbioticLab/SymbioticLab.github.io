const fs = require('fs');
const pathFn = require('path');
const Hexo = require('hexo');
const spawn = require('hexo-util/lib/spawn');
const parseDeployConfig = require('hexo-deployer-git/lib/parse_config');

async function setup_deploy_repo() {
    let hexo = new Hexo(process.cwd(), {});
    await hexo.init();

    const deployDir = pathFn.join(hexo.base_dir, '.deploy_git');

    function git(...args) {
        return spawn('git', args, {
            verbose: false,
            stdio: 'inherit'
        });
    }

    let deployConfigs = hexo.config.deploy;
    if (!Array.isArray(deployConfigs)) {
        deployConfigs = [deployConfigs];
    }

    deployConfigs.forEach(async deployConfig => {
        if (deployConfig.type !== 'git') {
            return;
        }
        const repos = parseDeployConfig(deployConfig);
        if (repos.length !== 1) {
            throw new TypeError('only one repo is supported');
        }

        await git('clone', '--branch', repos[0].branch, repos[0].url, deployDir);
    });
}

setup_deploy_repo();
