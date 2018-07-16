import { join } from 'path';
import * as home from 'user-home';
import internals from './internals';

const configFile = join(home, internals.configFileName);

let conf: any;

try {
  conf = require(configFile); // tslint:disable-line
} catch (err) {
  console.log('The config file got issues.');
  console.log(err);
  process.exit(1);
}

export = conf;
