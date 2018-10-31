# file-deploy

[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]

[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

This is a command for deploying generated files to a git branch. Unlike the git-subtree approach, it does not require the generated files be committed to the source branch.

## Installation

```
npm install --save-dev file-deploy
```

## Usage

`deploy [args]`

### options

You can specify options in `.deployinfo`.
It must be valid JSON file.
The example is:

```json
{
  "directory": "dist/",
  "repo": "git@github.com:ineo6/file-deploy.git",
  "username": "deployBot",
  "email": "deployBot@bot.com",
  "branch": "gh-pages"
}
```

Alternatively, options can be specified in `package.json`:

```json
{
  "config": {
    "deploy-info": {
      /* your config here */
    }
  }
}
```

`.deployinfo` has precedence, if it does not exist, then `package.json` will be used.


#### `directory`
The subdirectory to deploy. Defaults to `dist/`.

#### `branch`
The branch that will receive the deploy. Defaults to `gh-pages`.

#### `repo`
The repo to push the deploy to. Defaults to `origin`.

#### `username`
The username that will be associated with the deploy commit.

#### `email`
The email that will be associated with the deploy commit.

[dependencyci-badge]: https://dependencyci.com/github/ineo6/file-deploy/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/ineo6/file-deploy
[version-badge]: https://img.shields.io/npm/v/file-deploy.svg?style=flat-square
[package]: https://www.npmjs.com/package/file-deploy
[downloads-badge]: https://img.shields.io/npm/dm/file-deploy.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=file-deploy&from=2018-10-31
[license-badge]: https://img.shields.io/npm/l/file-deploy.svg?style=flat-square
[license]: https://github.com/ineo6/file-deploy/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: htts://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/ineo6/file-deploy.svg?style=social
[github-watch]: https://github.com/ineo6/file-deploy/watchers
[github-star-badge]: https://img.shields.io/github/stars/ineo6/file-deploy.svg?style=social
[github-star]: https://github.com/ineo6/file-deploy/stargazers
