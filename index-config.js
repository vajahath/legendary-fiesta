#!/usr/bin/env node

var lme = require('lme');
var location = require('./location');

lme.d('\nPlace your configuration file at: ');
lme.sline();
lme.i(location);
lme.sline();
