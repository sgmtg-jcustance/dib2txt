# Change Log

All notable changes to the "CopyDIB2TXT" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.2] - 2024-12-19

### Added
- Configuration options for output file extension (`dib2txt.outputExtension`)
- Configuration option to control notifications (`dib2txt.showNotifications`)
- Better error handling and validation
- Improved test coverage

### Changed
- Modernized code to use async/await instead of callbacks
- Fixed output file extension from `.dib.src` to `.txt` (configurable)
- Improved error messages and logging
- Enhanced user notifications with file basename only
- Updated README with feature documentation

### Fixed
- ESLint warning for missing semicolon
- File extension inconsistency between README and implementation
- Better TypeScript error handling

## [0.0.1] - Initial Release

- Initial release
- Basic functionality to copy .dib files to text files on save