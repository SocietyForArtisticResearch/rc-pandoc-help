# rc-pandoc-help
Pandoc style conversion of RC helpfiles

If you want to make changes you have three options:

1. Directly edit on GitHub and do a pull request (great for small corrections !)
2. Ask us to make you a contributer to the repository.

- Clone the repository to your local machine
- Make changes in the files
- Run the pandoc script: 

	sh genhtml.sh 

- git add . -A (stages the changes, adds the new files to the git)
- git commit -m "write a message here describing the change" (commits the changes)
- git push (pushes to remote)

Sometimes it will ask you to do "git pull" first, if I added new stuff from my repo.

Here's an alternative, for including the CSS in the file itself:
First you’ll have to make sure that your pandoc.css file1 starts and ends with HTML <style> tags, so it should look something like this:

Then run the pandoc command like this:

pandoc -s -S --toc -H pandoc.css -A footer.html README -o example3.html
