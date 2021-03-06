var robot = require('robotjs');
var isGoodJ = require('is-good-json');
var fs = require('fs');
var lme = require('lme');

var conf_location = require('./location');
var conf;

try {
	conf = isGoodJ(fs.readFileSync(conf_location, 'utf8'));
} catch (err) {
	lme.w('there is no config file at present at the location \n');
}

if (!conf) {
	process.exit(1);
}

module.exports = function() {
	// magic happens here..
	robot.moveMouse(conf.login_loc.x, conf.login_loc.y);
	robot.mouseClick();
	robot.typeString(conf.password);
	robot.keyTap('enter');
}
