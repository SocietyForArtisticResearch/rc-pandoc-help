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
__pandoc -s tools.mdown -o tools.html -c style.css__
