#!/bin/bash

# make an array with all the files following pattern *-*.md
files=$(ls -v *-*.md)

# generate the HTML file, using style and generate a TOC for depth h1 & h2
pandoc -s ${files} -o index.html  -c style.css --toc --toc-depth=2 

# insert an extra line to enable mobile display
perl -pi -e 'print "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" if $. == 7' index.html
