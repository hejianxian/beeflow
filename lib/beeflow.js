const path = require('path');
const pwdPath = require('./get-pwd')();

exports.getConfig = function() {
    try {
        return require(pwdPath + '/beeflow.config.js');
    } catch (error) {
        throw(error);
    }
};

exports.mergeConfig = function() {};