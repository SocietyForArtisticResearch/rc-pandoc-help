

## Content Manager / Editor Tab

The content manager is a collection of tabs located on the right side
of the graphical & block editors. It is not present in the text-based editor.

![map, media, references, popover and pages tabs](images/content-manager-v2.png "media
management")

* map - all objects in the current weave
* media:
  - simple media - all media uploaded in this exposition (including
    media that is no longer used in the weaves)
  - sets - sets are folders of media managed by the media repository,
    you will also find your (old) "works" here.
* ref - manage your bibliography and references
* pages - a list of all the different pages (pages)
* popup - a list of rc [footnotes and
  popovers](#footnotes-and-popovers)

<a id="media-management"></a>

<a id="overview"></a>

<a id="content-manager-map"></a>

### Map

You can use the overview to see all objects in the exposition as both
a miniature map and a list.  This can also be useful to retrieve lost
objects, or change the ordering (front to back). If you click on a
tool in the list, the editor will automatically jump to its location,
you can also double click a tool to edit the content of that tool.

### Media Tab

Media files can be found, uploaded, previewed and deleted in the
"Media"-tab on the right hand side. There are subtabs: __Simple
Media__, __Sets__ and __"+"__, which allows the integration of
external repositories, such as the Media Archive of the Arts of the
ZHdK (Madek).

#### Simple Media 

The simple media, which can be found within the "Media"-tab on right
hand side of the editor. Images, videos, audio and other media that
have been added in tools onto the canvas will automatically show up in
simple media tab. You can click and drag files from the simple media
tab onto your canvas in order to create tools.

You can also upload media here to use it as a background or preview
image in tools like the video tool and the pdf tool.

The list of media files can be sorted by type, name, creation date and
size and you can search for a file name by using the search field.

Files that are listed in gray are in the process of being transcoded.

There four buttons on top of the list of files, from left to right:

![Simple media tab](images/media_manage.png " the simple
media tab")

- Upload a file
- Preview a file
- Edit meta-data of the file
- Permanently delete a file from the RC (use with care)

Each media file can be provided with a license, see [licenses](#licenses).
The licenses of all used media in an exposition are shown on the META page.

#### Sets

You can view the media sets you created in the Media Repository. You
have to click on the set to open and view the media. Once opened, you
can drag media onto your page. An icon will indicate if the set is
shared to you by others.

#### Works

"Works" are an older feature similar to media sets, if you had created
works in the past you will find them under sets as well.

### Import Word documents using Simple Media

It is possible to upload Microsoft Word (.docx), Libre Office, Open Office
(.odt) and LaTeX documents and have the content automatically turned into RC
HTML tools and image tools. The RC uses [pandoc](https://pandoc.org/ "a Universal Document Converter") for this.

To convert a document, open the Simple Media Tab and upload it in the
"document" section of the upload dialog. It may take a few moments to
convert after the upload has reached 100%.

![media upload tab](images/media-upload-tab.png "the
media upload button")

![upload doc dialog](images/upload-doc-dialog.png "the
doc upload section")

Once converted, the document will show up as a folder within your simple media.
You can drag the elements from this folder to a desired location in the
exposition, resize and further adjust them. The document will be split whevever
there is an image and the images will become available as image tools.

To ensure maximum compatibility with RC fonts and styling, text-editor
specific styling is automatically filtered, but the inner structure of
the text is maintained. This includes: paragraphs, headers, bold,
italics, footnotes, illustrations & tables. Footnotes are also
converted into RC Footnotes/Popovers. 

If you want to reproduce the feel of a text document in your RC exposition, it
is best to use the block editor. When importing word content in the graphical
editor, please be careful with long text tools (which may cause issues).

#### Important Note Regarding Styling:

By default, RC has zero margin on all paragraphs, this will mean that
there is no whitespace between paragraphs. To avoid this issue, I
recommend adding the following style to your [raw
CSS](#page-settings---style "link to page settings docs") settings of
your page where you import word content.  You can edit the "raw css"
of a page by opening __pages tab__ > ✎ __edit settings__ > __style__ >
__raw css__.

<pre>
#container-weave .html-text-editor-content p {
    margin: 1em 0; /* set top and bottom margin to 1 */ }

#container-editor .html-text-editor-content p {
    margin: 1em 0; /* do the same for the editor */ } </pre>

This makes sure paragraph margins are displayed correctly.

### Pages

Pages are managed in the __pages__ tab of the content manager. An RC
exposition can consist of one or more pages. A new exposition starts
with a single page, called "default page".

![page tab](images/pages-tab-2023.png "the page tab")

#### Creating a Page

New pages are by default *private*, they have to be explicitely added
to the [table of content](#table-of-content "table of content") to be
visible (or by making a [hyperlink](#hyperlinking) to the page in your
own content). The order of pages cannot be changed in the pages list,
but this can be done in the table of contents. The exposition
page will automatically change size based on the content.

#### Entry page 

One can change the first page visible to the reader by changing the
__entry page__. Go to the menu __options__ and choose __edit meta
data__. Scroll down to __"entry page"__ (at the bottom of the dialog)
and select the page you want as your start page for the reader.  <!--
This should be in table of contents, it is completely out of place in
meta-data -->

### Page Settings

![the page settings dialog](images/pages-tab-2018.png "
the page settings")]

In the page settings dialog, you can change the meta data of the page
and control the page appearance. It is opened by clicking the pencil
button in the bar.

#### Page Settings - Metadata

* __Page title__\ Set a title for the page. This title can be
overridden in the [table of content](#table-of-content), so the reader
sees a different one. This can be useful if you need to keep track of
different versions of pages.

* __Description__\ The description is for personal reference and only
visible to the author and collaborators on the exposition.

* __Iframe field__\ Replace the entire page by an external website by
means of a URL. There are a few requirements to the URL for this to
work:

	* For reasons of security, the website needs to be configured to
      use a [TLS connection](https://en.wikipedia.org/wiki/HTTPS
      "https on wikipedia"). Links with TLS enabled can in most cases
      be identified by the __https://__ instead of __http://__ at the
      start.
	* You need to provide the full URL (inlude the https:// at the
      start).

	Please note that if a correct iFrame url is provided, the entire
    weave within the exposition is replaced by that website, so any
    tools and page styling present in the workspace will no longer be
    visible to the reader.

	If you want to combine external content with tools you should use
    the [embed tool](#embed-tool).

#### Page Settings - Style

Here one can change:

* __margin__: If set, it will make the exposition as if seen
  through a smaller window.
* __padding__: Pad extra space on the content itself (for example if
  you set top and left to 100, it will create extra space on the top
  and left). In other words, this makes the exposition canvas itself
  larger.
* __background__: Change the color or set an image as background.
* __links__: Change the default color for all hyperlinks within the
  page. One can set seperate colors for links the user visited.
* __footnote__: The color of footnote/popover links works the same way as with links, but for links of footnotes/popovers.
* __raw css__: apply your own CSS rules to the page, see below

### Raw CSS
  
You can set user defined [CSS](https://www.w3schools.com/css/ "css
tutorial") rules that are applied to the whole page. Cascading Style
Sheets are the standard way of styling HTML documents. Although most
styling can be directly edited through the style tab, it can
sometimes be useful to specify your own CSS.
  
The CSS class for HTML tools is:

	.html-text-editor-content {
	/* put your styles here */
	}
	
  
To style text within a simple text tool you have to use:

	.tool-simpletext .tool-content * {
	/* put your style here */	
	}
  
#### Supplying Your own Fonts 

You can include your own external fonts through CSS @import
statements. Be aware that many (also fonts like "Arial"), cannot be
self-hosted unless you have a license that allows that. Google Fonts has an
overview of fonts that you can freely use. Here is
an example of using the "Roboto" font:

	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

	.html-text-editor-content * {
		font-family: roboto;
	}

	.tool-simpletext .tool-content * {
		font-family: roboto;
	}

#### Line-Height

There is no way to control line height within the HTML or text tool, but you can change it using CSS:


	.html-text-editor-content * {
		line-height: 2em;
	}

	.tool-simpletext .tool-content * {
		line-height: 2em;
	}
	
"em" is a relative size unit, it measures the line-height ratio from
the size of the 'm' character in the font.

Be aware that changing the CSS 
	

#### Deleting a Page

The page can be deleted by clicking the trashcan icon next to the page
title. Deleted pages cannot be recovered. Of course, if you want to
make a page invisible to the reader it may be prefered to just remove
it from the [table of content](#table-of-content "table of content").




