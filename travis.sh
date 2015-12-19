#!/bin/bash

mkdir testbuild && cd testbuild
echo "yeotest\nyeotest\nYeotest\nme\ny\n" | yo cpp-suite
echo "MyClass\n\n\nn\n" | yo cpp-suite:addclass

