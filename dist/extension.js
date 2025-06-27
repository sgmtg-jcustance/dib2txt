"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var import_fs = require("fs");
var path = __toESM(require("path"));
function activate(context) {
  console.info("DIB2TXT Extension Active");
  let disposable = vscode.workspace.onDidSaveNotebookDocument(async (document) => {
    if (document.uri.fsPath.endsWith(".dib")) {
      console.info("A DIB Document was saved");
      try {
        const config = vscode.workspace.getConfiguration("dib2txt");
        const outputExtension = config.get("outputExtension", ".txt");
        const showNotifications = config.get("showNotifications", true);
        const dibFilePath = document.uri.fsPath;
        const txtFilePath = dibFilePath.replace(/\.dib$/, outputExtension);
        if (!dibFilePath || !txtFilePath || dibFilePath === txtFilePath) {
          throw new Error("Invalid file path or extension");
        }
        await import_fs.promises.copyFile(dibFilePath, txtFilePath);
        console.info(`DIB file copied to: ${txtFilePath}`);
        if (showNotifications) {
          vscode.window.showInformationMessage(`Saved ${outputExtension} file: ${path.basename(txtFilePath)}`);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("An error occurred copying file:", errorMessage);
        vscode.window.showErrorMessage(`Failed to save text file: ${errorMessage}`);
      }
    }
  });
  context.subscriptions.push(disposable);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
