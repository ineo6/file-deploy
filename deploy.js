#!/usr/bin/env node
const argv = require('yargs').argv;
const process = require('process');
const {spawn} = require('child_process');

const getConfig = require('./config').getConfig;

const config = getConfig();

const options = {
    directory: config.directory || 'dist/',
    repo: config.repo || 'origin',
    username: config.username || 'deployBot',
    email: config.email || 'deployBot@bot.com',
    branch: argv.branch || config.branch || 'gh-pages'
}

if (typeof options.branch === 'boolean') {
    options.branch = '';
}

if (!options.repo) {
    console.log('缺少对应的仓库地址!');
    return false;
}

if (!options.branch) {
    console.log('缺少对应分支名称!');
    return false;
}

if (options.branch && options.repo) {
    spawn('./node_modules/.bin/git-directory-deploy',
        ['--username', options.username, '--email', options.email, '--directory', options.directory, '--branch', options.branch, '--repo', options.repo], {
            stdio: 'inherit',
            // 仅在当前运行环境为 Windows 时，才使用 shell
            shell: process.platform === 'win32'
        })
}

