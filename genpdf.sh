#!/bin/bash

files=$(ls -v *-*.md)

pandoc ${files}  --toc --toc-depth=2 --latex-engine=pdflatex -o output.pdf
