# LIBSSH2-LabVIEW: Adds SSH client support to LabVIEW using the libssh2 library

- [Example Usage](#example-usage)
- [Dependencies](#dependencies) 
  - [Installation](#dependencies-installation)
  - [Development](#dependencies-development)
- [Installation](#installation) 
- [Build](#build) 
  - [Packaging using VIPM Pro (recommended)](#packaging-using-vipm-pro-recommended)
  - [Packaging using VIPM Free](#packaging-using-vipm-free)
- [Documentation](#documentation) 
- [Tests](#tests) 
- [License](#license)

## Example Usage

A VI snippet of downloading a file from a remote SSH server using this toolkit:

![Simple SCP file download](https://github.com/fieldrndservices/libssh2-labview/blob/master/docs/SCP-File-Download.png)

A VI snippet of uploading a file to a remote SSH server using this toolkit:

![Simple SCP file upload](https://github.com/fieldrndservices/libssh2-labview/blob/master/docs/SCP-File-Upload.png)

## Dependencies

### Installation <a name="dependencies-installation"/>

- LabVIEW 2009 or newer (All systems)
- [libssh2-nilrt-ipk](https://github.com/fieldrndservices/libssh2-nilrt-ipk/releases) (For CompactRIO only)
- [libssh2lv-nilrt-ipk](https://github.com/fieldrndservices/libssh2lv-nilrt-ipk/releases) (For CompactRIO only)

### Development <a name="dependencies-development"/>

- [Caraya](http://sine.ni.com/nips/cds/view/p/lang/en/nid/215909)
- [HTML Help Workshop](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/htmlhelp/microsoft-html-help-downloads) (for compiling the help documentation)
- [JKI State Machine](http://sine.ni.com/nips/cds/view/p/lang/en/nid/209025)
- LabVIEW 2009 or newer (for building)
- LabVIEW 2018 or newer
- Labricator (only for automated builds, private package available upon request)
- [OpenG Array Library](http://sine.ni.com/nips/cds/view/p/lang/en/nid/209027)
- [OpenG File Library](http://sine.ni.com/nips/cds/view/p/lang/en/nid/209027)
- [VIPM Pro](https://vipm.jki.net/get) (only for automated builds)
- [VIPM API](https://support.jki.net/hc/en-us/articles/214136183-VIPM-API) (only for automated builds)

The Caraya, JKI State Machine, OpenG Array Library, OpenG File Library, and VIPM API must be installed for all versions of LabVIEW (2009 and 2018) to avoid errors during automated builds.

## Installation

A VI Package (VIP) will (hopefully) be available on the [National Instruments (NI)](http://www.ni.com) [NI Tools Network](http://www.ni.com/labview-tools-network/) in the future. It will be recommended to use the [VI Package Manager](https://vipm.jki.net/) published by [JKI](http://jki.net/) to install and update the library once it is available. Until then, the library can only be installed by: (i) downloading the source code and building the VIP, (ii) downloading a VIP from the [releases](https://github.com/fieldrndservices/libssh2-labview/releases) section of this project, (iii) manually copying the VIs from the source code into a project, or (iv) requesting a VIP from the authors.

## Build

Each component in the LIBSSH2-LabVIEW project has a Source Distribution build specification. The destination of each source distribution build is the `builds` folder relative to the project root, i.e. same folder as the `LIBSSH2.lvproj` file. Additionally, the output for the compiled help documentation is also the `builds` folder. The `builds` folder should _not_ be included in the version control repository. A `Build.vi` script is available in the `Scripts.lvlib` project library that will build all of the components and the help documentation automatically (VIPM Pro is not needed, but the [HTML Help Workshop](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/htmlhelp/microsoft-html-help-downloads) is needed).

The VI Package Build (.vipb) specification, located in the `configs` folder relative to the project root, is configured for the package source to be the `builds` folder. Thus, the Source Distribution for each component must be built **before** opening the `LIBSSH2.vipb` file in the <abbr title="VI Package Manager">VIPM</abbr>; otherwise, the package configuration will be lost.

### Packaging using VIPM Pro (recommended)

__Important__, if creating a package for LabVIEW 2009 from LabVIEW 2018, the [VI Server TCP/IP ports](http://zone.ni.com/reference/en-XX/help/371361P-01/lvhowto/configuring_the_vi_server/) must be different for each version of LabVIEW and verified with the [VIPM](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z000000P9YmSAK) application _before_ proceeding. An error will occur when the VIPM is started if both LabVIEW 2009 and 2018 are running at the same time. Basically, VIPM will not know which VI server to use if both versions of LabVIEW are using the same TCP/IP port.

If VIPM Pro is available, then open the `LIBSSH2.lvproj` file in any version of LabVIEW newer than 2009 and run the `Package.vi` located in the `Scripts.lvlib` project library of the Project Explorer window. Ensure all dependencies are installed before running the `Package.vi` script.

Note, the version number for the package is set in the `configs\LIBSSH2.vipb` file. The version number in the VIP build specification file should be modified and saved _before_ running the `Package.vi` script.

### Packaging using VIPM Free

If VIPM Pro is _not_ available, then the following steps can be executed to do essentially the same thing as the `Package.vi` script. Ensure all dependencies, except VIPM Pro and the VIPM API, are installed before completing these steps.

1. Start LabVIEW 2018 or newer and open the `LIBSSH2.lvproj` file.
2. From the Project Explorer window, **File>>Save for Previous Version...**, a new dialog will appear.
3. Select **9.0** from the drop down menu.
4. Click **Save...**. A new dialog will open.
5. Create the `target\9.0` folder hierarchy in the project root, i.e. the same folder as the `LIBSSH2.lvproj` file, if it does not already exists.
6. Click **Save**.
7. Close LabVIEW 2018 or newer and the `LIBSSH2.lvproj` file.
8. Navigate to `<project root>\src`.
9. Copy the `Help` folder to `<project root>\target\9.0\src`.
10. Start LabVIEW 2009.
11. Open the `<project root>\target\9.0\LIBSSH2.lvproj` file. Do NOT open the project in any other version of LabVIEW.
12. Open each Source Distribution build specification under the "Build Specifications" tree item in the Project Explorer and change the _Output Destination_ to `<project root>\target\9.0\builds`. Save and close each build specification.
13. Run the `Build.vi` in the `Scripts` project library to build each Source Distribution under the "Build Specifications" tree item and the compiled help documentation file (`LIBSSH2.chm`). The output of each build will be available in `<project root>\target\9.0\builds`.
14. Open the `<project root>\target\9.0\configs\LIBSSH2.vipb` file in VIPM.
15. Build the VI package with VIPM. The output will be available at `<project root>\target\9.0\packages`. Do NOT modify anything in the package build specification, but ensure the "2009" version of LabVIEW is selected in the upper, right-hand corner of the VIPM application window.
16. Close VIPM.
17. Close LabVIEW 2009 and the `<project root>\target\9.0\LIBSSH2.lvproj` file.

## Documentation

See the in-app LabVIEW Help system for more information and documentation about using the library after it has been installed, or (eventually) visit the [web-based documentation](https://help.fieldrndservices.com/libssh2-labview). Examples are also available within the LabVIEW development environment using the "Help->Find Examples..." menu item.

## Tests

Tests are written in LabVIEW using the [Caraya](https://github.com/JKISoftware/Caraya) unit testing framework and included in the project via the various `Tests.lvlib` project libraries and the `tests` on-disk folder. To run the tests, open the `LIBSSH2.lvproj` file found in the project root in the LabVIEW Development Environment (32-bit or 64-bit) and run the `Test.vi` script located in the `Scripts.lvlib` project library. This will run all of the tests defined in all of the various `Tests.lvlib` project libraries located in the project. 

The tests require a SSH server. The SSH server should support password and public/private key authentication. The SSH test server can be the `localhost`. The tests will prompt for a IP address, username, password, passphrase, etc. as needed. None of the tests are included in the VIP distribution. They are only included with the source code, but they also provide excellent examples for using each of the VIs in the public API of the toolkit.

## License

LIBSSH2-LabVIEW is licensed under either the [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) or the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0), and it contains statically compiled code from the [libssh2](https://github.com/libssh2/libssh2) and [OpenSSL](https://github.com/openssl/openssl) projects, which are licensed under the [MIT license](https://github.com/libssh2/libssh2/blob/master/COPYING) and [Apache-2.0 license](https://github.com/openssl/openssl/blob/master/LICENSE), respectively. See the `docs` folder for more information about licensing and copyright. 

