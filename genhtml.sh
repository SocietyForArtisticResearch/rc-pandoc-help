#!/bin/bash

files=$(ls -v *-*.md)

pandoc -s ${files} -o index.html  -c style.css --toc --toc-depth=2 

perl -pi -e 'print "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" if $. == 7' index.html
