#!/bin/bash




sh genhtml.sh

echo "validating links within the generated index.html"
echo "(this requires python and bs4 (beautiful soup 4))"

python3 validate.py index.html
