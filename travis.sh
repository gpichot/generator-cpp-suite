#!/usr/bin/expect

spawn yo cpp-suite
expect "What is the name of the project?"
send "yeotest\r"
expect "What is the slug of the project?"
send "yeotest\r"
expect "Write a short description of your project:"
send "A build test\r"
expect "Who is the creator?"
send "Travis\r"
expect "Create a benchmarks directory ?"
send "yes\r"

expect eof


spawn yo cpp-suite:addclass
expect "Class name:"
send "Foo\r"
expect "Inherits from:"
send "\r"
expect "In folder (src/...):"
send "\r"
expect "Just generate header in source?"
send "n"

expect eof
