# generator-cpp-suite

A C++ Project [generator](http://yeoman.io) for lazy programmers.

## Vitamins included: 

* Project Build: CMake (with additional CMake modules)
* Source Control: Git (with baked .gitignore) 
* Testing: Google Test
* Code Coverage and Coverage Report: Lcov and Gcov
* Micro Benchmarking: Google Benchmark
* Documentation: Doxygen
* Install: Pkg-config (in progress)

## Install
You need npm and yeoman installed first, then:

    npm install generator-cpp-suite

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
