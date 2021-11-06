## Block Editor

The _block editor_ is a recent feature to the graphical editor of the
RC. It allows the author the same tools as the existing 2d graphical
editor, but instead of positioning content absolutely (using 2d
coordinates), content is structured as a list of rows and columns. The
positioning of content is relative: the bottom of the previous tool
determines where the next one starts. Because there are no absolute
positions, the display of the content can be optimized for the screen
size of the reader. This strategy is also known as [responsive web
design](https://en.wikipedia.org/wiki/Responsive_web_design).

The basic shape of a block page is linear and quite similar to the
text-based editor, except that here we can use the same tools and drag and
drop method as in the graphical editor. By allowing custom column
layouts, it is also possible to position tools next to each other,
something which is more difficult in text-based expositions.

### When to use

The block editor is most suitable for:

* text with inline media
* text with media that should be next to a certain position in the text
* content that needs to be readable on a phone

It is not so good for:

* diagrams
* maps
* timelines

Certain tools (sync, shape for example), can only be used in graphical
pages, since they do not make much sense in a block page.

### Basic structure: rows and columns

A block page is organized as a list of boxes which are called
__rows__. A row is created by clicking the black + at the bottom of the previous block.
You can then choose a certain column layout for this block.




Within each __row__, you can have one or more __columns__
of __cells__ dividing the content in that row. You can think of it as
a table, except that the number of columns is allowed to be different
for each row. Within a __column__ you can have any number of tools,
although it is probably a good idea not too have too many in one
column, since it will make it harder to change layout afterwards.

>>> TODO insert diagram showing different column layouts

The default is 1 column in the row, in which you are basically just
editing a list of tools. When you create or drag and drop new tools in
the column, they will be added to bottom of that column.

If you want to put content next to each other horizontally, you can do
this by changing the column layout within a row. You can only set the
layout in a new or empty row.  If you want to change the layout of a
row with content, it is best to insert a new row with the correct
layout and then drag and drop the tools to this new layout.

### Editing

You can move tools by dragging and dropping them from one cell to the
other.  Dropped tools will never replace tools, they will insert at
the bottom of the current cell.


### Viewing 

On screens that are very narrow, the content will automatically break
into a single list again, without objects next to each other.


### Future

It will become possible to make two versions of the same content, a 2d
graphic and a 1d blog like layout. This way the exposition content can
automatically select the right format for the screen it is being
consumed on.
