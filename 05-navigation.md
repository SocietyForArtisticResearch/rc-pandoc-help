<!-- TODO: Insert links to other parts of the documentation -->

# Navigation

## Navigation bar

When one moves the mouse cursor to the top of an exposition, a menu bar
appears. 

![the RC navigation bar](images/navigation-bar.png "image showing the navigation bar")  

The navigation bar contains, from left to right:

* __Content__ This contains the table of contents and links to the authors. Please see the help section on [table of contents](#table-of-content).

* __Navigation__ Navigation is a graphical map of all the exposition's
content on the current weave. You can click it to jump to a location.

* __Abstract__ Abstract, this can be changed by clicking title in the editor or ☰ > __edit details__ on your profile.

* __Title / Meta__ By moving the mouse pointer the title of
your research, a little window with metadata will appear. The link
(URL) of the current page is shown, including the current scrolling
location. This URL can thus be used to generate the [hyperlink](#hyperlinks) for
internal linking. You can also use this link to cite a specific
location.

* __Reviewing__
Reviewing is connected to the note tool (the yellow "post-it" notes)
and is intended for the communication between the author(s) and the
reviewer during the reviewing-process. This option is only available for expositions that have not been published yet. Notes can also be used for approving expositions in educational contexts.
<br />
There are a couple of functions available:
<br />
	- hide notes 			(hide all notes)
	- show open notes 		(show only notes that are open)
	- show resolved notes 	(show the resolved notes)
	- add new note 			(open a note tool)
	- previous note         (jump to previous note)
	- next note             (jump to next note)

### Comments

Shows the latest and previous comments on your exposition from the RC
community.

### Terms of use

This displays the terms of as set by the Society for Artistic Research (SAR).

## Table of Content

See the [video tutorial](https://www.researchcatalogue.net/view/273532/273533/54/759) on this topic.

![an example of a contents list, made through the table of content](images/table-of-content-example.png)

The table of content is designed to facilitate the navigation through
an exposition. In order to edit the table of content and add entries,
open the "Options" menu item and click on "edit table of content" (one
can also open this window by going to the exposition on the profile
page and clicking "edit details"). This opens a dialogue window titled
"Edit Research." The second tab ("table of content") of this window
contains a series of entries.

![Table of content dialog](images/table-of-content-dialog.png)

To make a new entry, click on the index number and select the page (or "weave") from the drop down menu and click submit.

There are two optional fields:

* __Title__\
Specify a custom name for this entry to be used within the contents menu.
If left empty, it uses the title from the editor.

* __X-COORD & Y-COORD__\
you can use this to create an entry that has an offset, which immediately opens the page on a specific location within the exposition. The X,Y values correspond to an offset in pixels. The Y offset is measured from the top. Instead of looking these values up by hand, you may also use [__commands -> show current position__](#set-default-position-show-current-position).

*Tip: you can easily reorder the table of contents entries by clicking and dragging the boxes.*

### Static navigation bar

At the bottom of the __table of content__ dialog, there is an option __static menu bar__ to display the navigation bar continuously (instead of it automatically hiding).

### TOC alignment

Choose wether the links in the content menu should be displayed *horizontally* or *vertically*.

## Hyperlinking

See the [video tutorial](https://www.researchcatalogue.net/view/273532/273533) on this topic.

It is possible to create hyperlinks between pages (or "weaves") of an
exposition and within a single page. This process exists of two steps: 
fetch the link and creating the hyperlink.

In order to fetch a link to a different page within your exposition:
  
1. open the page you want to link __to__ in the editor
   (through the page tab on the right hand side).
2. *(optional)* scroll the page to the position where you want the link to point to.
3. go to __options->show current position__

This will display a URL of the target page with the current scroll location. Copy the URL
into the clipboard (Ctrl-C/Cmd-C). 
 
Now to turn a piece of text into a hyperlink:  

1. Create or open a [Text](#text-tool) or [HTML tool](#HTML-tool) and select a word or sentence that should become the link.
2. Now click the hyperlink button (it looks like a chain link) and a dialog will be displayed.
![location of the hyperlink button in text tool](images/html-hyperlink.png)
![location of the hyperlink button in the html tool](images/text-hyperlink.png)
3. Paste the link in the __link URL__ field and click __add link__.

![Hyperlink dialog window](images/hyperlink-dialog.png)

### Dialog options:

Within the hyperlink dialog there are a couple of options:

* __Link URL__ : here you can type or paste a link 
* __Target__ : control wether the link will open in a new screen or not.
* __Title__ : change the title of the link
* __Class__ : set the class of the link (this is rarely used)

## Overview

Within the "Commands" tab on the right-hand side of the editor there
is a checkbox labeled "Overview." Clicking the checkbox will open
and close a tab on the right-hand side of
the editor. It contains both a map and a list of all objects in the exposition.

The overview map outlines all tools on the page, their size and position. By moving the red rectangle, one can jump to a specific position on the page.

Below the overview map, there is a list of all objects. If you click one of these tools, you go directly to that tools location. This can also be very useful when trying to find tools that have somehow become hidden, for example if another tool has been placed on top.
