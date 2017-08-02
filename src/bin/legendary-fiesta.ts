#!/usr/bin/env node

import * as program from 'commander';
import * as packageDetails from '../../package.json';

program
	.version(packageDetails.version)
	.option('-W, --wake <time>', 'wakeup time')
	.command('conf', 'configure this package')
	.command('position', 'get position of mouse after 5 seconds')
	.command('engage', 'engage your system')
	.parse(process.argv);
