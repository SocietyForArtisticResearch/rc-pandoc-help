# HTML Import

It is possible to import a website of static HTML into the RC. This
feature is aimed at users that are familiar with HTML and want to use
their own editor.

For security reasons, JavaScript is not supported, but CSS files,
`<img> <video> <audio>` tags can be used. The folder containing your
HTML and media files are to be uploaded as a single zip file
(.zip). The maximum filesize is 10Gb, although for practical reasons
it is probably more convenient to stay well below this.

*Important: at this moment, the existing RC Journals do not accept
submissions imported as HTML, because they do not fit in existing
reviewing/editing workflows. If you are planning to submit your
exposition to one of the journals in the RC, one should use the
graphical or the text-based editor.*

To create a HTML based exposition:

1. Click \[ Create Exposition \] on your profile page.
2. Select "html based" as the editor, fill in required metadata fields and click submit.

![selecting html import editor](images/selecting-html-import.png "html import editor")

3. You will now enter an upload screen, where you can select your zip.

![the upload screen](images/upload-html-expo.png "the upload screen")

4. Wait for upload to finish

	When the upload finished and there is no error, you can view the
	exposition by clicking the preview button (eye in the top right
	corner). If it is not succesful you can use the error message to 
	see what changes you may need to make and try again.


### Requirements for HTML Expositions

There are a few requirements to the zip that is uploaded:

* The root folder needs to contain a file named index.html, this will
  be the page where the exposition opens.
* All other HTML files in the root folder will be added to the table
  of contents.
* Do not nest folders into folders.
* You can use .html .css and various media formats, mp4, mp3 etc..
  The RC will automatically transcode the video and audio to a web compatible format.
* JavaScript is currently not supported for security reasons, if
  present, import will fail.
* Maximum size is 10Gb.


### Character Encoding

The character encoding of the .html files should be UTF-8.
You should specify the character encoding first (before `<title>`), for example like so:

<code>
	
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<title>my exposition</title>
	</head>
	<body>
	etc... 

</code>

### Example Exposition

An example HTML-based exposition for use in the RC can be found on Github:

__source:__
<https://github.com/SocietyForArtisticResearch/rc-html-import-example>

__as zip:__
<https://github.com/SocietyForArtisticResearch/rc-html-import-example/blob/master/DemoExposition.zip>

### Updating

Currently, it is not possible to update single files within your uploaded exposition.
When something changes, you will have to upload the whole exposition again.

