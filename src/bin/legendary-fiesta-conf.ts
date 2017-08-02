#!/usr/bin/env node

import * as chalk from 'chalk';
import * as editor from 'editor';
import { join } from 'path';
import * as home from 'user-home';
import confGen from '../config/conf-template-generator';
import internals from '../config/internals';

const configFile = join(home, internals.configFileName);

try {
	// check if the conf exists or not
	require(configFile);
	console.log(chalk.gray(' > config file found'));
	openEditor();
} catch (err) {
	if (err instanceof SyntaxError) {
		console.log(chalk.red(' > syntax err found in the config file'));
		console.log(chalk.cyan(' > regenerating file'));
	} else {
		// make the file with initial values
		console.log(chalk.gray(' > Initializing credentials ...'));
	}
	confGen(configFile, openEditor);
}

function openEditor() {
	console.log(chalk.gray(' > opening editor..'));
	return editor(configFile, undefined, (code: number) => {
		if (code !== 0) {
			throw new Error('something went wrong while saving configuration');
		}

		console.log(chalk.green(' > You\'ve edited config successfully!'));
		console.log(
			chalk.gray('------------------------------------------------\n'),
		);
	});
}
