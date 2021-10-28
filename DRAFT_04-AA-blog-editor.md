## Blog Weaves

Blog weaves are a recent feature to the graphical editor of the RC.
They use the same tools as the existing 2d graphical editor, but
instead of organising them absolutely in 2 dimensions on a canves,
they are structured as a scrollable list of content (comparable to a
blog or social media feed, where you scroll from top to bottom to
read).

The result is linear and quite similar to the text-based editor,
except that here we use the same tools and drag and drop method as in
the text editor.

### Basic structure: rows and columns

A blog page is organized as a list of blocks which are called rows.
Within each row, you can have one or more columns of cells dividing
the content in that row. You can think of it as a table, except that
the rows can vary in the number of cells they have:

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
other.  Dropped tools will never replace tools,  they will insert at the
bottom of the current cell.


### Viewing 

On screens that are very narrow, the content will
automatically break into a single list again, without objects next to
each other.


### Future

It will become possible to make two versions of the same content, a 2d
graphic and a 1d blog like layout. This way the exposition content can
automatically select the right format for the screen it is being
consumed on.
