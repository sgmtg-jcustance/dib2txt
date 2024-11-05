import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.info('DIB2TXT Extension Active');
    let disposable = vscode.workspace.onDidSaveNotebookDocument((document: vscode.NotebookDocument) => {
        if (document.uri.fsPath.endsWith('.dib')) {
			console.info('DIB2TXT: A DIB Document was saved');
            const dibFilePath = document.uri.fsPath;
            const txtFilePath = dibFilePath.replace(/\.dib$/, '.dib.src');
            fs.copyFile(dibFilePath, txtFilePath, (err) => {
                if (err) {
					console.error('DIB2TXT: An error occured copying file');
                    vscode.window.showErrorMessage(`Failed to save .txt file: ${err.message}`);
                } else {
					console.info('DIB2TXT: A copy of the .dib was saved as .txt');
                    vscode.window.showInformationMessage(`Saved .txt file: ${txtFilePath}`);
                }
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
