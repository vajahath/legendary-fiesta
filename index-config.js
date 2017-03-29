#!/usr/bin/env node

var lme = require('lme');
var PATH_SEP = require('path').sep;

var location = process.env.HOME || process.env.HOMEPATH;

lme.d('\nPlace your configuration file at: ');
lme.sline();
lme.i(location + PATH_SEP + '.mwtc__');
lme.sline();
