import * as jsonfile from 'jsonfile';
import * as lme from 'lme';
import template from './template';

export default (configFile: string, cb: () => void) => {
	jsonfile.writeFile(configFile, template, { spaces: 2 }, (err: Error) => {
		if (err) {
			lme.e(
				'Something went wrong while trying to generate credential template!',
			);
			console.log(err);
			throw err;
		}
		cb();
	});
};
