#!/usr/bin/env node

var program = require('commander');
var doIt = require('./do-it');
var lme = require('lme');
var moment = require('moment');

program
	.version('1.0.1')
	.option('-W, --wake <time>', 'wakeup time')
	.command('config', 'configure this package')
	.command('position', 'get position of mouse after 5 seconds')
	.parse(process.argv); // end with parse to parse through the input

if (program.wake) {
	var timeLeft = moment(program.wake) - moment();
	setTimeout(function() {
		doIt();
	}, timeLeft);
}
