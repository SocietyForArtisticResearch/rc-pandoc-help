<a id="table-of-content"></a>

## Table of Content

See the [video tutorial](https://www.researchcatalogue.net/view/273532/1685164#tool-1686823) on this topic.

![an example of a contents list, made through the table of content](images/table-of-content-example.png)

The table of content is designed to facilitate the navigation through
an exposition. Both pages and locations within a page can be added in the table of content.
In order to edit the table of content, go to the __"Options"__ menu > __"Edit Table of Content"__. 

![Table of content dialog](images/table-of-content-dialog.png)

To make a new entry, click on the index number and select the page (or "weave") from the drop down menu and click submit.

There are two optional fields:

* __Title__\
Specify a custom name for this entry to be used within the contents menu.
If left empty, it uses the title from the editor.

* __Tool__\
You can use a tool coordinates as an entry point. You will be provided with the list of tools in the exposition. This also means if you later change the tool position, this entry will still point to the same tool. It is recommended to name the intended tools in a clear way, so you can better find them from the list.

* __X-COORD & Y-COORD__\
you can use this to create an entry that has an offset, which immediately opens the page on a specific location within the exposition. The X,Y values correspond to an offset in pixels. The Y offset is measured from the top. Instead of looking these values up by hand, you may also use [__options -> show current position__](#set-default-position-show-current-position).

*Tip: you can easily reorder the table of contents entries by clicking and dragging the boxes.*

### Static navigation bar

At the bottom of the __table of content__ dialog, there is an option __static menu bar__ to display the navigation bar continuously (instead of automatically hiding it).

### TOC alignment

Choose whether the links in the content menu should be displayed *horizontally* or *vertically*.

## Hyperlinking

See the [video tutorial](https://www.researchcatalogue.net/view/273532/1685164) on this topic.

It is possible to create hyperlinks between pages (or "weaves") of an
exposition and within a single page. This process has two steps: 
First fetch the link and then create the hyperlink.

In order to fetch a link to a different page within your exposition:
  
1. Open the page you want to link __to__ in the editor
   (through the page tab on the right hand side).
2. *(optional)* scroll the page to the position where you want the link to point to.
3. Right click any tool you want to link to and click "copy tool link". 

   ![context menu showing the copy tool link command](images/copy-tool-link2.png "context menu, copy-tool-link is the second option")

In the graphical editor it is also possible to create a link that points to your current (absolute) position in the editor. To fetch such a "position
   link", use the menu __options
   > show current position__ and copy the url.

To use the hyperlink in your text:  

1. Create or open a [Text](#text-tool) or [HTML tool](#HTML-tool) and select a word or sentence that should become the link.
2. Now click the hyperlink button (it looks like a chain link) and a dialog will be displayed.
![location of the hyperlink button in text tool](images/html-hyperlink.png)
![location of the hyperlink button in the html tool](images/text-hyperlink.png)
3. Paste the link in the __link URL__ field and click __add link__.

Optionally you can change the target property, to have the link open in a new window.
Note that if you have not selected any text, the link dialog will not offer a hyperlink option.

![Hyperlink dialog window](images/hyperlink-dialog.png)

### Dialog options:

Within the hyperlink dialog there are a couple of options:

* __Link URL__ : here you can type or paste a link 
* __Target__ : control whether the link will open in a new screen or not.
* __Title__ : change the title of the link
* __Class__ : set the class of the link (this is rarely used)

## Overview

Within the "Overview" tab on the right-hand side of the editor there
is a checkbox labeled "Overview." Clicking the checkbox will open
and close a tab on the right-hand side of
the editor. It contains both a map and a list of all objects in the exposition.

The overview map outlines all tools on the page, their size and position. By moving the red rectangle, one can jump to a specific position on the page.

Below the overview map, there is a list of all objects. If you click one of these tools, you go directly to that tool's location. This can also be very useful when trying to find tools that have somehow become hidden, for example if another tool has been placed on top.

## Other Menus

### Edit menu

<img src="images/edit-menu-2018.png" class="half-image" alt=" the edit menu">

__Trivial copy paste functions:__

* cut - ctrl + K
* copy - ctrl + C
* paste - ctrl + V
* duplicate - ctrl + D
* delete - delete (Apple: fn + backspace)
(ctrl = cmd on Mac computers)

__Order functions:__

* bring to front
* bring to back

These options change the order of objects if they overlap. Order can be important if you have tools with controls: for example, an audio player that is behind a text tool would need to be in front to allow the user to click the play button on it.

__Locking:__

* lock 
* unlock

Locking an object means it cannot be changed or moved in any way (until it is unlocked). This feature can also be used if only part of the exposition is to be moved (by locking the objects you do not want to move). 

### Arrange menu

These functions help with aligning (two or more) tools. To select multiple tools, click them one by one while
holding ctrl/cmd key, then choose the function you want to apply from the arrange menu. 

<span style="red">
(!) Be careful when applying changes to many tools at once on a complex weave. The changes in position are not reversable (unless you copied the tools before).
</span>

* left edges: all left sides will be aligned (to the last tool you selected)
* right edges: all right sides will be aligned
* top : all top sides will be aligned
* bottom : all bottom sides will be aligned
* center on vertical axis : the tools will all be centered around one vertical line (like centered text !)
* center on horizontal axis : the horizontal middle of the tools will al be on the same horizontal line
* distribute left edges equally: the left and rightmost tool stay in the same place, equally space the left sides of the tools in between
* distribute top edges equally: the top and bottom tool stay the same, equally space the top sides of the tools in between
* make vertical gaps equal: the gaps between tools are all made the same (by dividing the sum of gaps equally)
* make horizontal gaps equal: the horizontal gaps between tools are made equal.


### Options menu

<img src="images/options-menu-2018.png" class="half-image" alt=" options menu">

#### Edit metadata

Here you can edit the Title, Abstract and Entry Page of the exposition.

#### Show tool borders

When this option is turned on, you will be able to see all borders of all tools (green dashed line) in the editor.
This can be helpful searching for empty tools.

#### Edit table of content

Here you can set the contents of the "contents menu" that the reader uses to navigate between pages and position in your exposition.

See [table of content](#table-of-content).

#### Grid options

* Snap to grid

Objects will only move in grid-size steps

* Show Grid

Show/hide the grid

* Grid size

Change the size of the grid

#### Set default position

Change the initial position that the reader starts at in the weave, to the current location of the editor view.

#### Show current position

This provides the X,Y offset of the editor and a position link.
X,Y can be used in the Table of content.
The position link in Hyperlinking, or simply to share a specific position through a position link.

#### Restore deleted tools

Restore recently deleted tools. Currently, this option is only available in the graphical editor mode.

#### Restore deleted footnotes

Restore recently deleted footnotes. Currently, this option is only available in the graphical editor mode.

### Help menu

Get help!

* this guide
* the forum
* the video tutorials

### Send Collaboration Message

When you are collaborating on an exposition, you can use the command
"send collaboration message" to communicate with your collaborators.



