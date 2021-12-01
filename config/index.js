const clientConfig = require('./webpack.dev');
const serverConfig = require('./webpack.server');

//todo: webpack for prod is not working!
module.exports = [clientConfig, serverConfig];
