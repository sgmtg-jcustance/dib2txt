import * as assert from 'assert';
import * as vscode from 'vscode';
import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('SpyglassMTG.copydibnb2txt'));
	});

	test('Activate function should exist', () => {
		assert.ok(typeof myExtension.activate === 'function');
	});

	test('Deactivate function should exist', () => {
		assert.ok(typeof myExtension.deactivate === 'function');
	});

	test('Configuration should have default values', () => {
		const config = vscode.workspace.getConfiguration('dib2txt');
		const outputExtension = config.get<string>('outputExtension');
		const showNotifications = config.get<boolean>('showNotifications');
		
		// These should have default values defined in package.json
		assert.ok(outputExtension !== undefined);
		assert.ok(showNotifications !== undefined);
	});
});
