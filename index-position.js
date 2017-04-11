var robot = require("robotjs");
var lme = require('lme');

var mouse;

setTimeout(function() {
	mouse = robot.getMousePos();
	lme.i("Mouse is at x:" + mouse.x + " y:" + mouse.y);
}, 5000);
