# generator-cpp-suite

A generator for [Yeoman](http://yeoman.io).

## Purpose
I use it to set up new C++ project with CMake configured.
It automatically sets up a git repository in the current directory.

## Supports
It currently supports the following tools:

* CMake
* Pkg-config
* Doxygen for documentation
* GTest for unit testing (and testing)
* Lcov and Gcov for code coverage and coverage report

**Note**: for code coverage it will automatically download as a submodule
a repository of CMake modules.

## Usage
To create a new project in an empty directory run:

    yo cpp-suite

## Additional commands
### New class and test
An additional command can be used to automatically create a new C++ class 
with test using:

    yo cpp-suite:addclass

## TODO

* Memory Leaks detection during unit testing
* Automatic C++ Style checks (with CppChecks)
