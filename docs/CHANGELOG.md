# Field R&D Services: libssh2-labview Change Log

All notable changes to this project will be documented in this file, which is written in plain text (ASCII) using the [Markdown](http://daringfireball.net/projects/markdown/syntax) lightweight markup language. This project adheres to [Semantic Versioning](http://semver.org). 

## [Unreleased]

### Added

- HTML Help documentation introduction content
- Text Rings for all of the libssh2lv library enums
- Automated build
- VIP build

### Changed

- Converting permission to and from bit masks to use Text Ring values instead of constants
- Strict typedef enums to Text Rings with libssh2 library macro definition values

### Fixed

- Session palette using SSH-Agent VIs (Issue #2)

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
