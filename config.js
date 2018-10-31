'use strict';

const findup = require('findup');
const fs = require('fs');
const resolve = require('path').resolve;

function getConfigObject(filename) {
    try {
        const rcFile = findup.sync(process.cwd(), filename);
        return JSON.parse(fs.readFileSync(resolve(rcFile, filename)));
    } catch (e) {
        return null;
    }
}

function getRcConfig() {
    return getConfigObject('.deployinfo');
}

function getPackageConfig() {
    var configObject = getConfigObject('package.json');
    return configObject && configObject.config && configObject.config['deploy-info'];
}

function getConfig() {
    return getRcConfig() || getPackageConfig() || {};
}

module.exports = {
    getConfig: getConfig,
    getRcConfig: getRcConfig,
    getPackageConfig: getPackageConfig,
    getConfigObject: getConfigObject
};
