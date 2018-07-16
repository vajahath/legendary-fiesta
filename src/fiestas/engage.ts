import * as robot from 'robotjs';

export default () => {
  console.log('Engaged ...');

  setInterval(() => {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x + 1, y);
  }, 5000);
};
