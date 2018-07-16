#!/usr/bin/env node

import * as program from 'commander';
import * as packageDetails from '../../package.json';

program
  .version(packageDetails.version)
  .command('conf', 'configure this package')
  .command('position', 'get position of mouse after 5 seconds')
  .command('engage', 'engage your system')
  .command('behave', 'login and engage')
  .parse(process.argv);
