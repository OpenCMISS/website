Build script for OpenCMISS-Zinc and OpenCMISS-Iron API documentation
====================================================================

Use this script to generate the following documentations:
* OpenCMISS-Zinc API
* OpenCMISS-Iron Fortran API
* OpenCMISS-Iron Internal API
* OpenCMISS-Iron Python bindings API documentation
* OpenCMISS-Iron C bindings API documentation

Currently it tracks OpenCMISS-Zinc develop branch (https://github.com/OpenCMISS/zinc) and OpenCMISS-Iron develop branch (https://github.com/OpenCMISS/iron) through git submodules.

Build It
--------
Run `make`.  The built API documentation folders will be available in the `build` directory.
