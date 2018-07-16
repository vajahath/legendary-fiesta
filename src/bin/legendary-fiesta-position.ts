import * as lme from 'lme';
import * as robot from 'robotjs';

let mouse;
lme.d('put the mouse in required place in 5 secs');

setTimeout(() => {
  mouse = robot.getMousePos();
  lme.i('Mouse is at x:' + mouse.x + ' y:' + mouse.y);
}, 5000);
