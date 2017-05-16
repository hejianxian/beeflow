const path = require('path');
const pwdPath = require('./get-pwd')();

exports.getConfig = function() {
    try {
        const beeflowConfig = require(pwdPath + '/beeflow.config.js');
        console.log(beeflowConfig);
    } catch (error) {
        console.log(error);
    }
};

exports.mergeConfig = function() {};