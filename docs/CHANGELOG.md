# Field R&D Services: libssh2-labview Change Log

All notable changes to this project will be documented in this file, which is written in plain text (ASCII) using the [Markdown](http://daringfireball.net/projects/markdown/syntax) lightweight markup language. This project adheres to [Semantic Versioning](http://semver.org). 

## [Unreleased]

### Added

- Descriptions to all VIs and type definitions for all classes
- Descriptions to all controls and indicators for all VIs
- Missing `Create from Listener` variant to the `Channel.lvclass:Create.vi` polymorphic VI
- Missing `Destroy to Listener` variant to the `Channel.lvclass:Destroy.vi` polymorphic VI

### Changed

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
