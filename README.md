# file-deploy

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
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
  "branch": 'gh-pages'
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

#### `--email`
The email that will be associated with the deploy commit.
