import * as program from 'commander';
import * as lme from 'lme';
import * as moment from 'moment';
import engage from '../fiestas/engage';
import login from '../fiestas/login';

program.option('-W, --wake <time>', 'wakeup time').parse(process.argv);

let validDate: boolean;

try {
  validDate = moment(program.wake, 'YYYY-MM-DDTHH:mm ').isValid();
} catch (err) {
  lme.e(err);
}

if (!validDate) {
  lme.e('Date string is not valid: here is the syntax: 2017-07-26T09:10');
  process.exit(1);
} else {
  const given: any = moment(program.wake);
  const now: any = moment();
  const timeLeft = given - now;

  setTimeout(() => {
    login(engage);
  }, timeLeft);
}
