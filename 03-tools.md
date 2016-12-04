<!--pandoc -s tools.md -o tools.html -c style.css-->

# Research Catalogue Workspace Tools

## General

The workspace tools are listed at the left side of the editor, under the Tools tab. To use a tool, drag it (click and hold the mouse button down) from the toolbar onto the canvas.

![dragging a toolbar to the canvas](images/toolbar-demo.png "drag a toolbar to the canvas")

### Context menu


<div class="small_image">
![context menu location](images/position-context-menu.png "context menu location")
</div>

The context menu of a tool is reached by clicking on the menu icon (see below), or right clicking (Apple: CTRL+click) inside a tool. The only exeption is the text tool, see text tool.

![context menu](images/context-menu.png "context menu")

* __Edit__ (open edit dialog)  
Open edit dialog

* __Copy__/__Paste__  
Copy/paste objects

* __Bring to front__/__Bring to back__  
Organise which object is in front of another.

* __Lock__/__Unlock__  
Lock means that one cannot make any changes until unlocked again.

* __Delete__  
Delete a tool


Tools can be resized by clicking and dragging the green borders with the mouse.

Tools can be rotated by clicking and dragging the yellow dot.

### Defaults

Defaults for styling and options can be set for a tool, by double clicking it in the toolbar.

## Text Tool

A video tutorial about the text tool is found [here](https://www.researchcatalogue.net/view/273532/273533/0/937 "link to video tutorials")

The text tool is designed for quickly adding text. 

It has two states: when it is in *active state* you can change the
text, if you click outside of the tool, you can move the object and
change the size of the outer box. Double click inside of the tool to
start editing the text again. Content is saved as soon as you exit the
text editing state.

If you right click the text tool, you can find some extra edit options
under __edit__.  You can also (while hovering over a text tool with
your mouse) click the ("hamburger") menu icon and choose __edit__.

In comparison to the HTML-tool, the text tool allows you to edit your
text directly on the page. While the HTML-tool opens a new dialog
window. If you need more styling options, use the HTML-tool. A text
tool can be converted to an HTML-tool via the menu option __convert to
HTML tool__.

<!-- insert link to video tutorials -->

<!--
<div class="easyhtml5video" style="position:relative;max-width:1190px;"><video controls="controls"  autoplay="autoplay" poster="video/eh5v.files/html5video/Supershort_text_demo_2.jpg" style="width:100%" title="Supershort text demo 2">
<source src="video/eh5v.files/html5video/Supershort_text_demo_2.m4v" type="video/mp4" />
<source src="video/eh5v.files/html5video/Supershort_text_demo_2.webm" type="video/webm" />
<object type="application/x-shockwave-flash" data="video/eh5v.files/html5video/flashfox.swf" width="1190" height="720" style="position:relative;">
<param name="movie" value="video/eh5v.files/html5video/flashfox.swf" />
<param name="allowFullScreen" value="true" />
<param name="flashVars" value="autoplay=true&controls=true&fullScreenEnabled=true&posterOnEnd=true&loop=false&poster=video/eh5v.files/html5video/Supershort_text_demo_2.jpg&src=Supershort_text_demo_2.m4v" />
 <embed src="video/eh5v.files/html5video/flashfox.swf" width="1190" height="720" style="position:relative;"  flashVars="autoplay=true&controls=true&fullScreenEnabled=true&posterOnEnd=true&loop=false&poster=video/eh5v.files/html5video/Supershort_text_demo_2.jpg&src=Supershort_text_demo_2.m4v"	allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_en" />
<img alt="Supershort text demo 2" src="video/eh5v.files/html5video/Supershort_text_demo_2.jpg" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser" />
</object>
</video><div class="eh5v_script"><p class="caption">basic text tool usage</p></div></div>
<script src="video/eh5v.files/html5video/html5ext.js" type="text/javascript"></script>
-->
		

	

### Style

See [style options](#style-options).

### Options

If a text is longer than its frame on the weave, a scrollbar is
generated automatically. You can control the visibility of the
scrollbar in __options__. The default setting is *automatic*.

### History

See [history](#history).



## HTML-Tool

The HTML-tool is designed for advanced text editing. It is a
*what-you-see-is-what-you-get* rich text editor. Unlike the text tool,
you can only edit its content in a dialog box.

### Media

![html tool media tab](images/html-tool.png "an image showing the html media tab")

Text is edited in the __media__ tab. To preformat the text, choose
your settings before typing. The style can also be edited after typing
by selecting either the whole page or sections of the page and
changing the formatting options as required.

*! important: If you copy-paste your text from Word, Pages,
   LibreOffice, Google Docs or any other text editor, note that not
   all fonts are available on every computer. Only the fonts that are
   listed in the RC editor will be rendered correctly for all readers
   (even if they do not have the font installed on their computer). A
   better practice is to import the text without any formatting.*

You can choose standard type formats such as bold, italic, or
underline and adjust the text alignment, font, and size.

To enlarge the palette of text styling options, click on the first
button, __show/hide toolbars__. Here you will find different options
for further formating options, such as listings, enumerations,
citations. It is also possible to create hyperlinks (using the chain
symbol), or to set anchors for navigation. If you hover over an icon
you can get a short text description of the function. The top right
button opens the editor in fullscreen.

![html extended tool options](images/html-tool-bar-extended.png) 

You can add pictures or further HTML materials such as i-frames (the
embedding of HTML pictures or video is not possible with uploaded
audio-visual content, which means that you have to publish a URL from
an external server to paste it into the dialog). You can also choose
the colour or the background of the text using the colour tools,
insert symbols and tables, and control the edits with the __show
changes__ option.

### Style

[> See style options](#style-options)

### Options

If a text is longer than its frame on the weave, a scrollbar is
generated automatically. You can control the visibility of the
scrollbar in __options__. The default setting is *automatic*.

### Templates

If you want to reuse the content of an HTML-tool, you can create your
own templates. This function can be found in the __media__ tab. After
finishing the edit of your template, click __save__ __as__ __new__
__template__ and give the template a name in the dialog box that
appears. To load a template, click __load template__ and choose one
from the list in the dialog box.

### Submit, Delete, Or Cancel

Finally, you need to exit the dialog window. If everything is the way
you want it, choose __submit__ and the text field will be loaded on
the weave. To discard changes to the content, cancel the dialog
box. If you want to delete the whole HTML field, including all content
in it, click __delete__. Unintended deletions can be restored via
__commands__ – __restore deleted tools__.
 

## Picture Tool

To add a picture, drag and drop the __picture__ icon from the tool
palette onto the weave. As with all other tools, a pop-up dialog
appears automatically and gives you the choice between "selecting" or
"adding" an item.

You can upload image files in the following formats:
*jpg, png, tiff, gif, psd, tga, bmp.* For uploading PDFs, please use
the PDF-tool.

To add an item, choose "add" and upload the object from your desktop
to the RC servers. Name the file and make a declaration of the
copyright holder. Once an image is uploaded it is also automatically
added to the simple media tab.

### Style

[> see style options](#style-options)

### Options

There are options available to change how images are resized in relation to the green border containing the image.
This is controlled by changing the size parameter, which can be set to:  

* __contain__ : make the image small enough to fit without changing the aspect ratio (__default__)
* __cover__ : crop part of the image that is not fitting (aspect ratio stays the same)
* __fit__ : stretch the image  (aspect ratio changes)
* __auto__ : let the browser decide which part should be cut off

You can also change the *position* within the border ie: top-left, right-bottom etc...

In __settings__ you are able to lock the aspect ratio. And you can allow readers to enlarge the image by
activating the checkbox "on click open image in popup.".

If you want to use a picture as a hyperlink, paste a URL into the field *on click
open link*. It is also possible to show specific text when the cursor
is moved over a picture. Please note, you can't change the copyright
information in the "edit picture" window. To change the name or the
copyright text, go to the item in __simple media__ and click __edit__
(also double click) to open the __edit media__ dialog.

## Audio Tool

As with the other tools, use the audio tool by dragging and dropping
the icon from the tool palette onto the weave. A pop-up dialog window
appears automatically and gives you the choice between "selecting" or
"adding" an item.

You can upload audio files in the following formats: *ogg, wav, mov,
au, mp4 audio container formats; mp2, mp3, aac, pcm a-law, flac audio
codec* formats. All audio file formats will be transcoded to mp3s with
256kpbs.


To select media they must first have been uploaded into "simple
media." To add an item, choose "add" and upload the object from your
desktop to the RC servers. Name the file and make a declaration
of the copyright holder. After adding the file, you can edit the style
of the audio player with the html style standards and choose between
different play and display options.


Please note, to be used on our server, all media will be transcoded by
the RC. This takes some time. During the transcoding process, the file
name is greyed out in simple media. After the transcoding process has
been finished you will receive an email notification that your media
is transcoded and ready for use. For further information and technical
questions see [FAQ 2.6](http://www.researchcatalogue.net/portal/faq "FAQ") or
contact the RC User Support.

 
### Style

[> see style options](#style-options)

 

### Options

The audio player has a number of settings:

* __loop__
Will loop the playback when it reaches the end of the file.

* __autoplay__ 
The player starts to play back the file as soon as the
page has been loaded.

* __stop other players__ 
If you are using multiple audio (or video)
players on the same weave and your page is quite big, visitors may
find it helpful if you prevent overlapping by defining which player is
playing. With this option selected, all players (video player, audio
player on slideshows, other audio players) will stop when the selected
player is playing back a file. When simultaneous playback is desired, it
may be helpful to use the [Play-tool](#play-tool "jump to play tool
help").

* __display minimal__ When selected, the player consists of only the
play button and bar.  You can also define some visual player
settings. You can hide the whole menu bar or you can set the
visibility of the volume or define if you want a player with as few
options as possible.

As in the picture tool, if it is necessary to give textual information
about the sound file, you can enter the text to be displayed when the
mouse cursor hovers over the item.


## Video Tool

As with the other tools, you can use the video tool by dragging it
from the tool palette and dropping it onto the weave.

In the dialog box that appears you have the possibility to add
(i.e. upload) items from your computer or select items from the
"simple media" folder.  At the moment, the RC supports the following
formats: *avi, mov, mp4, mpg* video container formats; *dv1394, h.264,
mpeg2, mpeg1, mjepeg* video codec formats.

Please note also our general format information in [FAQ 2.5](http://www.researchcatalogue.net/portal/faq "FAQ").

To add an item, choose "add" and upload the file from your desktop to
the RC servers. All videos uploaded in this way will also be added to
the simple media tab. Name the file and make a declaration of
the copyright holder. After adding media, you can edit the style of
the audio player with the html style standards and choose between
different play and display options.

Please note, all media will be compressed to a smaller size, this is
called 'transcoding'. This process takes time. During the
'transcoding' the file name is greyed out in your simple media. After
the transcoding process is finished you will receive an email
notification to tell you that your media is transcoded and ready for
use. For further information and technical questions see
[FAQ 2.6](http://www.researchcatalogue.net/portal/faq "FAQ") or
contact the RC User Support.

We highly recommend using smaller video files. People without a fast
internet connection will not watch videos when they are too big to
stream fluently. If your file is extremely large, you may want to
convert it using Handbrake, FFMpeg or another video compression tool
to reduce its size.

### Style

[> see style options](#style-options)

### Options

The video player has a number of options:

- __loop__
Loops the video when it reaches the end.

- __autoplay__ 
The player starts to playback the file when the page is loaded. 

- __stop other players__ 
If you are using multiple video players on
the same weave and your page is quite big, visitors may find it
helpful if you prevent overlapping by defining which player is
playing. With this option selected, all players (video player, audio
player on slideshows, other audio players) will stop when the selected
player is running a file. When simultaneous playback is desired, it
may be helpful to use the [Play-tool](#play-tool "jump to play tool
help").

- __display minimal__ 
When selected, the player constists of only the
play button and the bar.


As in the picture tool, if it is necessary to provide textual
information on the video file you can choose to display plain text or
copyright information that will appear when the mouse cursor hovers over the
item.

You can also use the play tool to synchronize selected video and audio tools.


## Slideshow Tool

The slideshow tool allows you to create a gallery of images that can
be displayed in a loop. You can choose to start the slideshow
automatically and you can add an audio file to each picture of the
slideshow.

Drag and drop the slideshow icon onto the weave and the dialog window will appear.

To be able to select media you first have to upload an item into
__simple media__ or select media files from your works. To add an
item, choose __add__ and upload the object from your desktop to the RC
servers. Name the file and make a declaration of the copyright
holder. After adding the file, you can edit the style of the picture
with the html style standards. To add a sound file to the slide, the
file first needs to be uploaded to simple media.

### Style

[> see style options](#style-options)

### Options

In "options" you can define the position of the image within the
frame. This is important when you are using images with different
sizes and proportions. In __settings__ it is possible to choose to
loop the slideshow. If the __loop__ option is enable, the slideshow
will continue with the first slide once it reaches its last slide. You
can choose to hide the navigation bar or give the reader the option to
enlarge the picture with a click on the picture in your weave.

In __automate__ you can set the autoplay options to:

* *run after click* : run automatically after the first click 
* *autoplay* 		: after loading the page

When choosing *autoplay* you need to define the speed with which the
slide will change. You can customise the duration of each slide
(*speed per slide*) or let each slide change at the default speed.

As mentioned before, you can append audio files to each slide. Please
note, you first have to upload the file into your __simple media__
folder. In __options__, __audio__ you can control the time of a
crossfade (when one audio file fades out while a second fades in at a
specified time). You can also choose the fade duration and the timeout
of an audio file.


## PDF Tool


The PDF tools give you the possibility to include longer text
documents in an RC exposition. It is generally preferable to use the
text or HTML-tool for text. 

After dragging the icon to the weave, you can upload the pdf in the
"edit pdf" dialog window. You can also choose a pdf from "simple
media" if it has been uploaded previously. An alternative way to
upload is to click the "+" below "simple media."

In the uploading dialog box, you can choose to represent the pdf in
your exposition either with a preview image of the file or with a
different picture.

 
[> see style options](#style-options)

 
### Options

The RC gives you and your reader the possibility to read the pdf
directly in the browser if the browser supports this. To use this
option check "display in browser" in option > settings of the "edit
pdf" tool dialog box. As in the picture tool, you can provide further
information using the hover option. To do this, select one of the
options in the "show on hover" pull-down menu. In addition, you can
create a plain text to be displayed when the reader's mouse hovers
over the PDF preview. To use this, choose "plain text" or "copyright &
plain text" from the pull-down menu and write your text in the text
field below.


## Play Tool

The play tool is designed to synchronize the playback of selected
video and audio tools on the same weave. With this tool one can create
a single control for playing back various media files at the same
time. This can, for example, be used to document video installations
with multiple screens and allows playing back synchronized
combinations of musical voices and audio tracks. The play tool
displays an image which can be clicked and functions as play and pause
button. Clicking the image will start the playback of the selected
audio and video files. While playing the tool another image will be
displayed instead. Clicking this image will pause the players.

### Media

In the media tab one can upload two image files. One image will be the
play­placeholder, i.e.clicking the image will initiate the playback of
the selected files. The other image will be the pause­placeholder,
i.e. clicking this image will pause the selected audio and video files
on the weave.

### Options

In the options tab one can select from among all audio and video files
on the weave. These must have been uploaded first with the audio and
video tools. The selected files will be controlled with the play
tool. The option “pause other players when playing” will ensure that
only the selected media files will be played back.
 


## Shape Tool

The Shape tool is designed for placing simple graphic elements
such as arrows and lines in your exposition. You can generate forms to
structure your layout or to help navigation. You can create
rectangles, circles and lines. You can choose if they're filled or
not. You also have the possibility to specify the thickness of the
frame and control the opacity of the elements. There are also four
types of arrows (left, right, up, down). You can resize the elements
on the weave by resizing the green frame displayed around the
shape. By clicking and dragging the yellow point you can rotate an element.
 

 

## Note Tool
 

The note tool allows you to organize your work on RC, comment on
sections, and communicate with co-authors. Drag the note icon from the
tool-pallett onto the weave. You can write directly into the note
without opening a new edit-window. Each note has a time-stamp which is
generated when the note is placed on the weave. 

It is possible to define who is responsible for the content (a
change or revision, correction) of the note and you can set a date
for resolving the issue described in the note.

Notes are visible on the preview as well. Please check, that all notes
have been removed from the exposition when you intend to share or
publish it.

### Text Style Options

You can use the buttons to directly add the basic stylings,
eg. highlight it with bold or italic font or structure it with
numerations or lists. You can change the font-family and increase or
decrease the indentation. You can also insert links.

### History

"History" provides a log of all changes that have been made to the
tool. If you have unintentionally deleted a tool, you can restore it
using "restore deleted tools" in the commands.


## Object Viewer

The object viewer tool is a designed for displaying three-dimensional
images. Is is based on the
[3DNP library](http://thoro.de/page/3dnp-introduction-en "3dnp").  By
dragging the object with the mouse cursor it can rotated around two
axis, i.e. the object can be turned around its centre and tilted back
and forth.  It is necessary to upload a series of images as a zip
file. These images need to be numbered (i.e. image001.jpg,
image002.jpg etc). Each image must the object from a different
angle. You can imagine the creation of the images as the following
process: the object rotates around a vertical axis in a number of
steps, then moving slightly around a horizontal axis and rotating
around the vertical axis in a number of steps again. This is repeated
until an image of every combination of vertical and horizontal
positions has been created. The number of different angles (steps of
rotation around the horizontal axis) is defined by the setting
"levels" in the dialog window. The number of steps of the rotation
around the vertical axis is implicitly defined by "levels" and the
total number of images.


## Style Options

![image showing the style tab of an html tool](images/style-tab.png "the style tab of an html tool")

The style tab allows you to set the way an object looks on the outside.
Click on the small ">" to open one of these sections:

* position & rotation
* padding
* border type, color and width
* background (color or image)
* shadow
* opacity

The style tab only sets the basic (mostly external) style of the
object, text markup is done within the text or html tools.

### Change tool defaults

It is possible to change the default styling settings for any tool, by double clicking the tool in the toolbar.
After the default is changed, every newly created tool will initially use these new settings.

## History

The *history tab* gives you the posibility to change the content
__within the tool__ to an older version.  The versions of a text
object are created each time you have clicked outside it (and the
three animated dots show inside). With the html tool, a version is
created each time you click submit.


