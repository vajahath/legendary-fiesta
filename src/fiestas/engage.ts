import * as robot from 'robotjs';

export default () => {
	console.log('Engaged ...');

	setInterval(() => {
		robot.keyTap('escape');
	}, 5000);
};
