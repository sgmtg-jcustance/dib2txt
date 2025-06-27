# Copy DIB to TXT

This extension automatically saves a polyglot notebook (.dib) file as a text file when saved, so that when checked into source control you can see the changes in diffs and pull requests.

This addresses an issue where .DIB files are treated as binary files by many source control systems and cannot show textual changes in reviews.

## Features

- **Automatic copying**: Automatically creates a text copy when you save a .dib file
- **Configurable output extension**: Choose your preferred extension (default: .txt)
- **Optional notifications**: Control whether to show success notifications
- **Modern implementation**: Uses async/await for better performance and error handling

## Configuration

This extension contributes the following settings:

- `dib2txt.outputExtension`: File extension for the output text file (default: `.txt`)
- `dib2txt.showNotifications`: Show notification messages when files are copied (default: `true`)

## Usage

1. Open a polyglot notebook (.dib file) in VS Code
2. Make your changes
3. Save the file (Ctrl+S / Cmd+S)
4. The extension will automatically create a text copy with your configured extension

## Author

Joshua Custance  
Spyglass MTG  
© 2024