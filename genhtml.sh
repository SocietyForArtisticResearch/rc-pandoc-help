#!/bin/bash

files=$(ls -v *-*.md)

pandoc -s ${files} -o output.html  -c style.css --toc -f markdown_github
