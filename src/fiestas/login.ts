import * as robot from 'robotjs';
import conf = require('../config/conf-loader');

export default (cb: () => void) => {
  robot.moveMouse(conf.login_loc.x, conf.login_loc.y);
  robot.mouseClick();
  robot.typeString(conf.password);
  robot.keyTap('enter');
  cb();
};
