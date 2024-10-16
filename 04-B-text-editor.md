<a id="fonts"></a>

## Fonts

The research catalogue currently provides the following fonts:

__Sans-serif:__

- Anton (similar to __Impact__)
- Nimbus Sans L (similar to __Helvetica__)
- Arimo (similar to __Arial__)
- Carlito (similar to __Calibri__)
- Open Sans
- Lato
- PT Sans (used in the Research Catalogue logo)
- Roboto


__Serif:__

- Crimson Pro
- Libre Baskerville
- Merriweather

__Monospace:__

- Courier Prime
- IBM Plex Mono
- Roboto Mono

![fonts overview](images/fonts.png "the fonts")

If you have an older exposition (created before April, 2022), you will also be
able to select additional fonts. The reason for this is that Research Catalogue
used to allow users to select these in the past. A majority of these fonts were
only available in Windows and/or MacOS. The licensing around these proprietory
fonts prevented Research Catalogue from self-hosting them. When a font was not
available locally, the browser would switch to an alternative and this resulted
in smaller or bigger visual differences and a warning message to the user.

The current solution to this problem is that Research Catalogue now provides a
set of fonts that we can host ourselves. This guarentees that a font chosen in
the text & html tools can never be missing. To ease the switch, we have included
replacements that are designed to closely match the common fonts like Arial,
Calibri and Helvetica and Impact. Older expositions will keep their current
fonts but allow you to also use the new ones. Published expositions expositions
cannot be changed, but you can create a new version of the exposition.

## Migration of fonts in your expositions

In existing expositions (that have not been published), you can replace all
current fonts to using the RC-safe set. One way would be to do this by hand, but
for convenience we also provide an automatic option.

If you have a simple exposition, it is recommended to first do some small test
switching the font in a selection of tools within your exposition by hand. If
you like the result, you can then use the migration option, which can be found
in the menu: __Options > Edit metadata > compatibility__. Due to technical limitations, 
this option is not available if the exposition is "in revision" or "in review". If you want to apply the font migration to an exposition in such state, please follow the instructions __"Safely trying a migration"__ below.

The font compatibility dialog will automatically detect which fonts are used in
your exposition. You will then be asked to select a replacement font for each
one.

### Safely trying a migration:

If you have a very complex exposition with many tools, we highly recommend to
first try the font migration on a copy instead of the original exposition (!).
You can make a copy by:

1. go to your profile page
2. click the ☰ -> "manage versions" option on the exposition
3. create a snapshot
4. restore the snapshot, this will appear as a separate exposition on your profile.
5. open ☰ -> edit workspace, and go to __options > Edit metadata >
   compatibility__ to apply the migration.

If you do not like the result, you can just delete the exposition and start at step 1.

## Text Based Editor

<a id="text-based-editor"></a>

First time user of the text editor? <a href="#introduction">click here</a>.
  
### Overview

<div id="overview-block">
<p>Click any element in the image to jump to the relevant section:</p>
<img class="center overview-map" src="images/editor-overview-elm.png" width="1000" height="549" class="overview-map" usemap="#image-map">
<map name="image-map"> <area alt="Upload media files" title="Upload media files" href="#upload-media" coords="101,68,2,46" shape="rect">
    <area alt="Import external format (Word docx, Open office odt, Plain txt)" title="Import external format (Word docx, Open office odt, Plain txt)" href="#import-export" coords="107,51,189,70" shape="rect">
    <area alt="Editor (using Markdown)" title="Editor (using Markdown)" href="#editor" coords="496,530,7,97" shape="rect">
    <area alt="(Live) preview of the exposition" title="(Live) preview of the exposition" href="#preview" coords="497,1,1000,545" shape="rect">
    <area alt="Export to other formats (Pdf, odt, docx etc.)" title="Export to other formats (Pdf, odt, docx etc.)" href="#import-export" coords="289,71,193,44" shape="rect">
    <area alt="Media list (edit metadata/display)" title="Media list (edit metadata/display)" href="#media-list" coords="75,5,123,40" shape="rect">
    <area alt="Style tab" title="Style tab" href="#edit-style" coords="126,8,168,41" shape="rect">
    <area alt="Markdown" title="Markdown" href="#markdown" coords="0,5,72,41" shape="rect">
    <area alt="Toolbar" title="Toolbar" href="#toolbar" coords="7,73,481,94" shape="rect">
    <area alt="Help / Preview / Profile / Logout " title="Help / Preview / Profile / Logout " href="#menu" coords="365,5,488,34" shape="rect">
    <area alt="Saving" title="Saving" href="#saving" coords="434,534,492,548" shape="rect">
</map>
</div>
    
* <a href="#markdown">markdown</a> <a href="#editor">editor</a>  
    *write and edit your text* 
* <a href="#preview">preview</a>  
    *preview the result.* 
* <a href="#media-list">media-list</a>  
    *add/remove/edit media.*  
* <a href="#import-export">import/export</a>
    *import&export to various text formats*
* <a href="#edit-style">style editor</a>   
    *change the styling (font-size etc..) using CSS*  
* <a href="#upload-media">Upload media</a>    
    *Upload media files (image, video, pdf) and insert in your exposition*  
   
### Introduction  

The text-based editor is aimed at creating
[responsive](http://https://nl.wikipedia.org/wiki/Responsive_webdesign)
RC expositions. Despite the "text" in the name, expositions made with
this editor can also contain images, video, audio or PDF. "Text based"
refers to the method of editing: through plain text. 

Because of this plain text input, text-based expositions can be easily imported
or edited in external editors. The consequence is that editing the visual layout
is less direct as in the graphical based editor. The structure of the exposition
is expressed by using Markdown, the display of which can be customized through
style sheets (css). 

 
On desktop, the editor splits the screen in two: you can write your
text on the left side <a href="#editor">editor</a> while the result is
shown as a <a href="#preview">preview</a> on the right hand side. It
is also possible to <a href="#import-export">import</a> the text from
external formats like Word and Open Office. Formatting
(__bold__,*italic* etc...) is added using <a
href="#markdown">markdown</a> notation.
 
If you want to insert [media](#introduction "video, audio, image or
PDF"), you can add these through the <a href="#upload-media">__"upload
media"__ button </a>. When the upload has finished, the media edit
dialog will automatically open, allowing you to edit and insert it.

Finally, the look of your text and media can be controlled through the media list and the style editor.

### Creation and Using a Template

To create a text-based exposition, go to "my profile" and click [
create exposition ], then select "text-based" for the editor
type. Additionally, you can select a template, which will mean your
new exposition will be pre-filled with the stylesheet and, depending
on the template, some placeholder text.

Because the text-based and graphical formats are completely different,
you can only change the editor type the moment you create a new
exposition.

Portal admins can select any of their own expositions to become a
template for their portal users, by going to the "template" tab in
their [portal settings](#portal-settings-screen).

### Editor

The left hand side is where you can edit your text. The editor uses
[Markdown](#markdown "link to markdown docs"), which is a lightweight,
human-friendly [markup
language](https://en.wikipedia.org/wiki/Lightweight_markup_language). Because
Markdown is expressed as plain text, you cannot directly change the
styling of the text (font-size, color etc.. are edited in
[style](#edit-style) ), but you can express the structure/markup of
your text. See [Markdown](#markdown "more about markdown") for a brief
overview.

By default the editor uses colors to show the Markdown elements in
your text, but you can also choose "plain txt" which allows your
browsers spellchecker to work. [^1].

[^1]: It is not possible to have both at the same time.

### Pages / Table of Contents

The text based editor is limited to single page articles.
Headers marked with `#` will be included in the "contents" menu
automatically.

### Previews

Here you can see a preview of your exposition.

Because text based expositions are responsive (react to the size of
the window), the result may change based on the width of the
screen. For a full view preview, use the eye button in the toolbar.

#### Upload Media

To add new media, click upload media. After the upload finishes, the
media edit dialog opens. This allow you to edit its metadata, size and
to insert the media at the current cursor position.

If you want to insert previously used media, you can use the "media
button" in the [toolbar](#toolbar).

### Media List

All media that you uploaded will appear in the "media list", where
they can be edited or deleted.

![The media list](images/media-list-elm.png " media
list")

#### Editing Media 

From within the media-list, if you click [__edit__], you will be able
to change the __name__, __metadata__ and display of a media file.

* name (also used for the tag)
* change the way the files is displayed (size, float left/right)
* add copyright info
* choose a license
* add description
<br><br>  
Using the buttons in the list itself:
* remove the object from your exposition
* insert the object in the current position in the text.

![The media edit dialog](images/edit-media-elm.png " the
edit media dialog")

### Insert Media

Media is represented on the editor side using a !{*media-name*} tag.
The easiest way of inserting such a media tag is throught the [insert
media toolbar button](#insert-toolbar-button), which shows a list of
available media that can be inserted. Double click any item to insert.

![inserting media using the insert button](images/insert-media-elm.png "inserting media using the insert button")

You can also write the media tags directly, for example: to insert a
media named "myFile", you can directly write !{myFile}.  This
!{myFile} tag will be the location in your text where myFile will be
inserted.

A __caption text__ can also be included, to get a caption you write
![my caption text]{myFile}.  The caption text is displayed underneath
the media.

### Import & Export

You can import content from documents from text editors like Word (.docx),
Libre/Open Office (.odt), HTML and several other formats. Not all
styling is supported but images, footnotes, tables and most other
structural features of the text are. Best results will be achieved if
the document that is imported has a simple structure. When you import a
a document, it will not replace the current content, but be appended at 
the end of your page.

###  Edit Style

Text based expositions are styled using CSS (Cascading Style Sheets),
which is a standard way of styling web documents.  The CSS of an
exposition can be edited by going to the __style__ tab.  If you are
not familiar with CSS, there is a good introduction here:
<https://www.w3schools.com/css/>.

The structure of inserted media is as follows. You can use the outside
class (rc-media-123455) to style an individual media element.

```
	<div class="rcobject small [rcimage/rcpdf/rcvideo/rcaudio]rc-media-[media id]"> 
		<figure id="media-1"> <img src="...">
			<figcaption> Caption text, which is taken from the tag -> ![captiontext]{media1} 
			</figcaption> 
		</figure> 
	</div>

```

Most templates will provide some basic formatting already, that you
can adjust to your needs.

### Toolbar

From left to right:

* H1, H2 & H3 - insert [header](#headers) formatting
* B / I - insert [__bold__ (strong) and italic
  (_emphasis_)](#strong-emphasis)
* <img class="icon" src="images/icons/list-unordered.svg" title="icon"
  alt="list formatting button"> - [Unordered list / bullet
  point](#lists) formatting
* <img class="icon" src="images/icons/list-ordered.svg" title="icon"
  alt="list formatting button"> - [Ordered list / Numbered
  list](#lists) formatting
* <img class="icon" src="images/icons/link-intact.svg" title="icon"
  alt="hyperlink formatting"> - Insert [hyperlink](#links) formatting
* <img class="icon" src="images/icons/double-quote-sans-left.svg"
  title="icon" alt="quotation"> - Quotation
* __\*__ - Insert [footnote](#text-based-footnote) notation
* <img id="insert-toolbar-button" class="icon"
  src="images/icons/file-media.svg"> - Insert Media from media list
* <img class="icon" src="images/icons/undo.svg"> - Undo/Redo
* txt - Switch to plain text mode (browser can provide spellchecker in
  this mode)
* <img class="icon" src="images/icons/screen-full.svg"> - Fullscreen
  mode (hides preview)

### Markdown

Markdown is a human-friendly way of writing HTML webpages without
using code.  Markdown is written as plain text (like you would write
on a typewriter), that is translated into HTML for you.

By surrounding your words with a few special characters you can inform markdown which styling you want it to use.  

<a id="strong-emphasis">

For example:  
*italic* = `*italic*`   
__bold__ = `__bold__`   

Instead of typing these characters, you can also select a piece of
text and push the desired __style button__ on top of the editor. This
will insert the correct Markdown notation for you.

#### Paragraphs and Newlines

Single newlines are ignored by Markdown, unless:

- are made explicit by adding two spaces 
- preceded by the __backslash__ character "```\```"
- there are two newlines, which means there is one empty line.

Below are some examples to illustrate the behaviour.
In the _input_ the position of newlines is shown with ```⏎```.

---

__A single newline character is ignored (!)__

_input:_
<pre>This text will⏎</pre>
<pre>be joined together</pre>


_results in:_

<span class="bg-red">This text </span><span class="bg-blue">will be
joined together</span>


---

__An empty line will start a new paragraph__

If you create an empty line, by hitting enter twice ( ⏎⏎ ) , it will
create a new paragraph in the output.

_input:_
```
a paragraph some text and some other
text. a paragraph some text and some other
text. a paragraph some text and some other
text. a paragraph some text and some other
a paragraph some text and some other text⏎
⏎
Another paragraph with some text. Another 
paragraph with some text. Another paragraph 
with some text. Another paragraph with some 
text. Another paragraph with some text.⏎ 
⏎ 
```

_results in:_

<p class="bg-red extra-space">a paragraph some text and some other
text. a paragraph some text and some other
text. a paragraph some text and some other
text. a paragraph some text and some other
a paragraph some text and some other text
text</p> <p class="bg-blue">

Another paragraph with some text. Another 
paragraph with some text. Another paragraph 
with some text. Another paragraph with some 
text. Another paragraph with some text. </p>

---

__Two spaces at the end of your line will retain the newline:__

_input_:

<pre>This line has two spaces at the end  ⏎  </pre>
<pre>and it thus keeps the
newline.</pre>

_results in:_

<span class="bg-red">This line has two spaces at the end</span><br>
<span class="bg-blue">and it thus keeps the newline.</span>


---

__A newline can also be created by ending the line with a "\\":__

_input:_

<pre>The same for the backslash\⏎</pre>
<pre>also does the trick!</pre>


_results in:_
 
<span class="bg-red">The same for the backslash\ </span> <br> <span
class="bg-blue">also does the trick!</span>

  
### Headers

Headers are defined by using one or more \"#\" in front of the header
name:

`# header 1`<br> `## header 2`<br> `### header 3`<br>

There are six levels of headers. Header level 1, 2 and 3
(`#`,`##`,`###`) are automatically included in the __contents__ menu,
for easy navigation for the reader.

An alternative way of writing headers is by putting ===== or --- below
you header text.

`Header 1`  
`========`

`Header 2`  
`----------`

### Lists
 
To get a bullet point list, write * before each item. Before the first
item, keep an empty line.
Thus, when you write:  

    * my first point
    * another throught
    * yet another thought

it will result in  

* a list
* which has
* three items

To get ordered lists, write a number and a point, 1. , 2. , 3.

  	1. one
    2. two
    3. three

### Links  

Hyperlinks are written in the following manner:
`[linktext](http://example.com)`    
which results in:   
[linktext](http://example.com)  

You can also use create internal links, called *anchors*.  The link is
made by writing a hashtag (#) before the name of your anchor:

`[link](#your-anchor-id)`

*note the '#', without this it will not work!*

The anchor (or bookmark) itself is created like this:

`<a id="your-anchor-id"></a>`

### Text-based Footnotes

<a id="text-based-footnote"></a>

The easiest way of inserting a footnote is using the footnote button:
[ __\*__ ].  Footnotes consist of two parts, the reference, written
like so:

`[^1]`

Then you define the footnote content at the bottom of your text with:

`[^1]: This is my footnote.`

The footnote content is automatically moved to the bottom of the resulting
text. 

Tip: the footnote identifier, does not have to be a number.
You can also use names like (`[^fn1]` or `[^myfootnote]` etc..)

 
### Quotation

A quotation is inserted by indenting your text with 4 spaces or 1 tab,
like so: <pre> ` quotation` ` more quotation` </pre>

Quotations are not automatically formatted (they keep their newlines).

### Markdown Tables

Tables are written like this:

<pre>
| Name | Age | Species |
|---------|-----|---------|
| Harry | 23 | Human |
| Gerhard | 77 | Parrot |
| Judith | 6 | Cat | </pre>

| Name | Age | Species |
|---------|-----|---------|
| Harry | 23 | Human |
| Gerhard | 77 | Parrot |
| Judith | 6 | Cat |

You may also use [HTML
tables](https://www.w3schools.com/html/html_tables.asp).  There are
also online tools that help you generate
[either](https://www.tablesgenerator.com/markdown_tables) of
[these](https://www.google.com/search?q=convert+excel+to+html+table)



