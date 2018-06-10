First time user? <a href="#introduction">click here</a>.
  
## overview

Click any element in the image to jump to the relevant section.   

<div class="rcimage big center">
<object class="overview-map" width="1000" height="542" data="images/editor-overview.png" usemap="#image-map">
</object>
</div>    
	  
<map name="image-map">
    <area target="" alt="media list" title="media list" href="#media-list" coords="11,47,85,77" shape="rect">
    <area target="" alt="import export" title="import export" href="#import-export" coords="87,49,180,80" shape="rect">
    <area target="" alt="edit style" title="edit style" href="#edit-style" coords="185,50,255,73" shape="rect">
     <area target="" alt="drag-and-drop" title="drag-and-drop" href="#drag-and-drop" coords="259,55,416,81" shape="rect">
    <area target="" alt="editor" title="editor" href="#editor" coords="19,120,995,510" shape="rect">
    <area target="" alt="preview" title="preview" href="#preview" coords="505,119,999,536" shape="rect">
    <area target="" alt="title" title="title" href="title" coords="15,12,231,44" shape="rect">
</map>  
    
1. <a href="#markdown">markdown</a> <a href="#editor">editor</a>  
    *write and edit your text* 
2. <a href="#preview">preview</a>  
    *preview the result.* 
3. <a href="#media-list">media-list</a>  
    *add/remove/edit media.*  
4. <a href="#import-export">import/export</a>     
    *import&export to various text formats*
5. <a href="#style">style editor</a>   
    *change the styling (font-size etc..) using CSS*  
6. <a href="#drag-and-drop">drag and drop zone</a>    
    *quickly insert any media file*  
7. <a href="#title">title field</a>   
    *change the title of the exposition*
   
## introduction  

The text editor is aimed at creating [responsive](http://https://nl.wikipedia.org/wiki/Responsive_webdesign) RC expositions that mainly consist of text. 
 
You can write your text on the left side <a href="#editor">editor</a> while the result is shown as a <a href="#preview">preview</a> on the right hand side. It is also possible to <a href="#import-export">import</a> text from external formats like Word and Open Office. Formatting (__bold__,*italic* etc...) is added using <a href="#markdown">markdown</a> notation.     
 
If you want to use images or other media in your article, you can add these through the <a href="#drag-and-drop">__"click or drop to add media"__ button/drop zone </a>, when the upload has finished the media will be automatically inserted into the current cursor location.  

Finally, the look of your text and media can be controlled through the media list and the style editor.

## editor

The left hand side is where you can edit your text. The format used is <a href="#markdown">markdown</a>, which is a plain text format (like with a typewriter). The editor automatically detects paragraphs.  
 
For styling not supported by markdown, you can use HTML, since HTML is also allowed within markdown (with the exception of scripts, for security reasons).

## preview

Here you can see a preview of your exposition.

Note, that because text based expositions are responsive (react to the size of the window), the result may change based on the width of the screen. For a full view preview, use the eye button in the toolbar.

## media list

Video, audio, images and pdf can be placed in your expositions. They are represented on the editor side with the notation "! {name}" which is then replaced with the actual media item in the rendered exposition.

Note: you do not have to type the ! { name }  yourself, when you upload something or insert media through the media list, the correct placeholder is inserted for you.

### inserting media

To insert new media, drop or select your file in the __drag and drop__ zone. After the upload finishes the media placeholder ( ! {media} ) will be inserted at the current cursor position.

If you want to insert previously used media, you have to open the media list and click insert button next to the desired item.

![inserting media](images/inserting-media.png "text showing inserting media")

<a name="drag-and-drop"></a>  
### drag and drop 

Click this zone to open a file picker, alternatively media files (images, audio, video or pdf) can also be directly dropped here from your media browser.  When the upload is finished the media item is directly inserted to the current cursor location of your text.

### editing media 

In the **media list** you can edit media and the way it is displayed.

![The media list](images/medialist.png "image showing media list")


* name (also used for the tag)
* replace the media file with another
* change the way the files is displayed (float left/right, size)
* add copyright info
* add description
<br><br>  
Using the buttons in the list itself:
* remove the object from your exposition
* insert the object in the current position in the text.

## import & export

You can import documents from text editors like Word, Open Office, HTML and several other formats. Not all styling is supported but images, footnotes, tables and most other core features of the text are.

## edit style

For users that know CSS, edit style opens a CSS editor. 

## markdown

Markdown is a human-friendly way of writing HTML webpages without using code. 
Markdown is written as plain text (like you would write on a typewriter), 
that is translated into HTML for you.

By surrounding your words with a few special characters you can inform markdown which styling you want it to use.  

For example:  
*italic* = `*italic*`   
__bold__ = `__bold__`   

Instead of typing these characters, you can also select a piece of text and push the desired __style button__ on top of the editor. This will insert the correct Markdown notation for you.

## paragraphs 

Paragraphs are recognized by markdown by whitelines.

Now that I've skipped a line, this is a second paragraph.  
TIP: You can force a linebreak by leaving 2 spaces at the end of a line.
  
## headers 
Headers are defined by using one or more \"#\" in front of the header name:

`# header 1`<br> 
`## header 2`<br>
`### header 3`<br> 

There are six levels. Header level # and ## are automatically included in the contents menu, for easy navigation for the reader.  


## lists
 
To get a bullet point list, write * before each item. Each item is seperated by a newline. A whiteline should preclude the first item.
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

## links  
Hyperlinks are written in the following manner:
`[linktext](http://example.com)`    
which results in:   
[linktext](http://example.com)  
 

## footnotes 

The easiest way of inserting a footnote is using the footnote button: <b>x<sup>2</sup></b>. 

If you want, you can also write them directly with the following notation:  
`[^1]`
 
`[^1]: this is footnote text.`  

The footnote content is automatically moved to the bottom. 






