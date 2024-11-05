import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.info('My Extensioni is active')
    let disposable = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        if (document.fileName.endsWith('.dib')) {
			console.info('A DIB Document was saved');
            const dibFilePath = document.uri.fsPath;
            const txtFilePath = dibFilePath.replace(/\.dib$/, '.dib.src');
            fs.copyFile(dibFilePath, txtFilePath, (err) => {
                if (err) {
					console.error('An error occured copying file');
                    vscode.window.showErrorMessage(`Failed to save .txt file: ${err.message}`);
                } else {
					console.info('A copy of the dib was saved as .txt');
                    vscode.window.showInformationMessage(`Saved .txt file: ${txtFilePath}`);
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
