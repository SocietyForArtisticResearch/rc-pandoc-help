# rc-pandoc-help
Pandoc style conversion of RC helpfiles

to add stuff simply clone the repository (clone http://[this repository].git)

simply start adding your own files, then open a terminal in the folder and:
- git add . -A (stages the changes, adds the new files to the git)
- git commit -m "write a message here describing the change" (commits the changes)
- git push (pushes to remote)


Sometimes it will ask you to do "git pull" first, if I added new stuff from my repo.

By the way, I found a library that can convert form markdown to html using only javascript:
https://github.com/jakov/js-pandoc

This is the PANDOC command I use for my md files:

pandoc -s *.md -o output.html  -c style.css --toc -f markdown_github

Here's an alternative, for including the CSS in the file itself:
First you’ll have to make sure that your pandoc.css file1 starts and ends with HTML <style> tags, so it should look something like this:

Then run the pandoc command like this:

pandoc -s -S --toc -H pandoc.css -A footer.html README -o example3.html
