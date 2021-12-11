# Field R&D Services: libssh2-labview Change Log

All notable changes to this project will be documented in this file, which is written in plain text (ASCII) using the [Markdown](http://daringfireball.net/projects/markdown/syntax) lightweight markup language. This project adheres to [Semantic Versioning](http://semver.org). 

## [Unreleased]

## [1.2.3] - 2021-12-11

### Added

- Optional TCP Port for connecting to a remote SSH server

### Changed

- The "Simple SFTP File Download" example to use a simpler VI

### Fixed

- Improper usage of SFTP Attribute API in the "Simple SFTP File Download" example

## [1.2.2] - 2021-10-19

### Changed

- Shared library version to v0.2.3

### Fixed

- Error 1097 occurring when repeatedly connecting to a server

## [1.2.1] - 2021-10-18

### Fixed

- Error 56 during connection because of zero timeout default

## [1.2.0] - 2021-10-16

### Added

- Connection timeout input to connecting a new session
- The `Read All` VI to the SFTP File class API
- Example of uploading a small file using SFTP
- Example of downloading a small file using SFTP
- Example of using multiple, parallel sessions with a Raspberry Pi

### Changed

- The libssh2lv shared libraries to v0.2.2 

### Remove

- Property definition for Session's `Connect.vi`
- Property definition for Session's `Disconnect.vi`

### Fixed

- Prepending array or string size to SCP download VI snippet in README
- Prepending array or string size to SCP and SFTP download examples

## [1.1.1] - 2021-01-11

### Fixed

- Search path for dynamic library to account for package name change

## [1.1.0] - 2021-01-05

### Added

- Read-Execute-Print-Loop (REPL) example using a Raspberry Pi as the remote SSH server
- Example for sending multiple commands to a Raspberry Pi
- Timeout indicator to Read All VI
- Timeout indicator to Read All Stderr VI
- Timeout indicator to Write All VI
- Timeout indicator to Write All Stderr VI
- Default terminal size width and height to 80x24 for the VI

### Changed

- Error -8140 (Execute Again Error, LIBSSH2_ERROR_EAGAIN) to a Warning 5040
- Package version number to match release version number
- Package name from `LIBSSH2` to `LIBSSH2 for LabVIEW` to further differentiate from the libssh2.org project
- Installation instructions to use VIPM.io links and procedures

### Fixed

- The "Execute Multiple Commands with a Single Channel with a Raspberry Pi" example
- The "Execute Multiple Commands with a Single Channel" example
- Typos in VI descriptions that appear in help context window

## [0.1.0] - 2020-04-17

### Added

- The `Channel.lvclass:Read All Stderr.vi` and `Channel.lvclass:Write All Stderr.vi` VIs
- Data entry limits to the `Max Data Length` and `Per Read Size` controls for the "Read" VIs in the Channel class
- Descriptions to all VIs and type definitions for all classes
- Descriptions to all controls and indicators for all VIs
- Missing `Create from Listener` variant to the `Channel.lvclass:Create.vi` polymorphic VI
- Missing `Destroy to Listener` variant to the `Channel.lvclass:Destroy.vi` polymorphic VI
- Path for the _Help path_ field to all VI documentation
- A relative path for the _Help tag_ field to all VI documentation
- The `Agent Identity.lvclass:Create.vi` and `Agent Identity.lvclass:Destroy.vi` VIs to the Agent palette
- CHM file to installable package (VIP)
- HTML help documentation for all controls, indicators, VIs, classes, and libraries
- Apache-2.0 License header to all block diagrams of all VIs

### Changed

- The `SFTP File.lvclass:Open.vi` to a polymorphic VI
- The `SFTP File.lvclass:Close.vi` to a polymorphic VI
- The `SFTP Directory.lvclass:Open.vi` to a polymorphic VI
- The `SFTP Directory.lvclass:Close.vi` to a polymorphic VI
- The `Channel.lvclass:Create.vi` SCP Receive instance to internally use a File Info object 
- `Max Data Length` from 32000 to 1024 for all channel read and write examples
- The type selector default from hidden to visible for all polymorphic VIs
- The `Session.lvclass:Create.vi` to a polymorphic VI for API consistency
- The `Session.lvclass:Create.vi` to a polymorphic VI for API consistency
- The `SFTP.lvclass:Create.vi` to a polymorphic VI for API consistency
- The `SFTP.lvclass:Destroy.vi` to a polymorphic VI for API consistency
- The `Known Hosts.lvclass:Destroy.vi` to a polymorphic VI for API consistency
- The `Known Hosts.lvclass:Destroy.vi` to a polymorphic VI for API consistency
- `SFTP File.lvclass:Flags.ctl` to `SFTP File.lvclass:Options.ctl` for API naming consistency

## [0.0.3] - 2020-04-02

### Added

- Example for executing multiple commands with multiple channels
- Example for executing multiple commands with a single channel

### Changed

- Internal libssh2lv shared library from v0.2.0 to v0.2.1

### Fixed

- Missing session read and write timeout VIs

## [0.0.2] - 2020-03-28

### Added

- Single Command Execution example
- Single Command Execution example VI snippet to the README
- HTML Help documentation introduction content
- Text Rings for all of the libssh2lv library enums
- Automated build
- VIP build

### Changed

- File Download example VI snippet in the README to use VIs from the install package instead of source code
- File Upload example VI snippet in the README to use VIs from the install package instead of source code
- File Upload example VI snippet in the REAMDE to use new VI icons
- "Channel.lvclass:Wait on Closed.vi" to "Channel.lvclass:Wait on Done.vi"
- "Channel.lvclass:Close.vi" to "Channel.lvclass:Send Done.vi"
- The VI icon for the "Channel.lvclass:Done.vi"
- The VI icon for the "Channel.lvclass:Wait on Done.vi"
- Converting permission to and from bit masks to use Text Ring values instead of constants
- Strict typedef enums to Text Rings with libssh2 library macro definition values

### Fixed

- Session palette using SSH-Agent VIs

## [0.0.1] - 2019-07-13

### Added

- SCP Examples
- SSH API
- Session API
- SCP API
- SFTP API
- Apache-2.0 and BSD-3-Clause license documentation
- Meaningful VI icons to public Toolkit API VIs
- Support for v0.1.X of the libssh2lv library
- Some documentation
- Tests using the Caraya unit testing framework
