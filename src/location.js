var PATH_SEP = require('path').sep;
var location = process.env.HOME || process.env.HOMEPATH;
var FULL_LOCATION = location + PATH_SEP + '.mwtc__';
module.exports = FULL_LOCATION;
