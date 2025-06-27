import * as vscode from 'vscode';
import { promises as fs } from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.info('DIB2TXT Extension Active');
    let disposable = vscode.workspace.onDidSaveNotebookDocument(async (document: vscode.NotebookDocument) => {
        if (document.uri.fsPath.endsWith('.dib')) {
			console.info('A DIB Document was saved');
            try {
                const config = vscode.workspace.getConfiguration('dib2txt');
                const outputExtension = config.get<string>('outputExtension', '.txt');
                const showNotifications = config.get<boolean>('showNotifications', true);
                
                const dibFilePath = document.uri.fsPath;
                const txtFilePath = dibFilePath.replace(/\.dib$/, outputExtension);
                
                // Validate file paths
                if (!dibFilePath || !txtFilePath || dibFilePath === txtFilePath) {
                    throw new Error('Invalid file path or extension');
                }
                
                await fs.copyFile(dibFilePath, txtFilePath);
                console.info(`DIB file copied to: ${txtFilePath}`);
                
                if (showNotifications) {
                    vscode.window.showInformationMessage(`Saved ${outputExtension} file: ${path.basename(txtFilePath)}`);
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                console.error('An error occurred copying file:', errorMessage);
                vscode.window.showErrorMessage(`Failed to save text file: ${errorMessage}`);
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
