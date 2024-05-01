<a id="my-profile-page"></a>

# Profile Page

The RC profile page is both the central hub for your activities on the RC and a public presentation of your research. You can create a detailed public profile containing two main sections. The first section contains biographical data, informations on projects and events. The second section is a list of your RC objects, such as media sets and expositions.

Only expositions which are [shared](#share "documentation on sharing") or
[published](#publication "documentation on publication") will be visible to
others. Additionally, you can hide ??? groupings of expositions through
the small dot next to the grouping.

Reviewers will also see the headers "Exposition Reviewing" or "Application Reviewing", containing links to the expositions they have
been assigned to.

## Profile Section

### View Public Profile

You can switch between your profile's editing mode (which includes all your private work in progress) and your public profile, which is the profile as other users see it. Click on "my profile" for the editing mode and - below your profile picture - click "view public profile" to see how other people see your profile.

![view public profile](images/view_public_profile.png "view public
profile")

### Description 

You can add a biography or text, that other RC users will see when they visit your profile. Here you can also add a tagline, set your country of residence, and list your research interests. You can also change the email address associated with your RC account that will be used to log in and notify you if you have turned on notifications. Your email address is not public. Click "edit profile" to edit all these properties.

### Uploading a CV

In addition to the profile description, it is possible to upload a
more extended CV as a PDF.  To do so, click "upload cv" below your
profile picture.

![upload your cv](images/upload_cv.png "upload a cv")


<!-- ### Degrees -->

<!-- You can also add your __degrees__ to your profile. Enter the
name, the level, the dates and the institution of your degree and link
it via the __relations-tab__ to projects, expositions or works that
you created in support for your degree. -->

### Member of

As a user you can request membership of (some of the) RC
portals. Certain actions can only be done if one is a member of the
portal. For example: for some application programs, it may be required
that you are member of the portal before you are able to submit an
application for a program.

In most cases however, it is the task of the portal admin to make you
a member of their portal. Most portals therefore do not allow users to
request membership themselves.

Click "edit" to request / widthdraw a portal membership.

## Research Section

### Create Exposition

By clicking "Create exposition" you can create a new exposition object
which will be opened in the RC exposition workspace editor. The
__title__, __copyright__ and __abstract__ fields are required. In
most cases, copyright is assigned to the main author of the exposition.  You can change these details
later by choosing ☰ > __edit details__, or in the __workspace editor__
by clicking the title of your research (at the top of you screen).

There are three types of exposition on the RC:

* [Graphical/Block](#graphical-editor---workspace "graphical editor
  documentation")
* [Text-based](#text-based-editor "text-based editor documentation")
* [HTML-based](#html-import "html import documentation")

For a description of the differences, please consult [editor
comparison section](#comparison).

![create exposition](images/add-research-dialog.png "the add research dialog")

### Exposition Details Menu

![the "hamburger" menu](images/hamburger_location.png "location of menu")

To access the menu, click on the "hamburger" menu icon, located in
the bottom right corner of an object (expositions or works). Some
options are only available to the author of the object.

* __Change layout__ change the size of an exposition preview on the profile.

* __Edit workspace__ open the exposition in the editor.

* __Edit details__ change the metadata of your exposition, and
  control collaboration with other users. See [edit
  research](#edit-research).

* __Share__ change the visibility of the exposition: private, public or shared to a specific group. 
Sharing is only available if the exposition is still a work in progress. After (self)publication of the research, the share status is ignored.

* __Self-publish__ turn an exposition into a fixed object that can be safely referenced.  <br/>Please
note that publishing is a one-way action, *once published one can not
unpublish*. If you want to keep the option of removing an exposition,
do not use this option. This is the only way the RC will register a DOI outside of submitting to a journal or portal.

* __Add to shortcut__ add a compact link to this object on the top of
  your profile.

* __Submit for review__ this will submit the publication for review (and possibly publication). 
  Submitting will change the status of the exposition to "in review" and will prevent you from editing it further.
   *Only the [owner](#the-owner-role) can submit for review and only the portal admin can undo it.*
  [See a full visual overview of review workflow here.](https://www.researchcatalogue.net/view/2066568/2175687) !!!broken link

* __Connect to__ send a connection request to a Portal or Group. *Only the [owner](#the-owner-role) can do this.*

* __Manage versions__ create or restore snapshots, see
  [versions](#manage-versions).

* __Export__\
  allows to export an exposition as either PDF or HTML. 
  
  - __HTML:__  
    A complete offline version of the exposition as a folder of HTML
    compressed to a zipfile. It is equivalent to the online version and can be
    read using any browser, but does not require an internet connection. The
    start page is named __index.html__ .

  - __PDF:__  
    Alternatively you can select PDF format. Dynamic elements as slideshows, video
    and audio recordings cannot be included in this format.

* __Delete__ delete an exposition or work from the RC. *Only the [owner](#the-owner-role) can do this.*

### Change Layout

This dialogue gives you the option of choosing the size of the
research description boxes on your profile page. Depending on the length of the content, the abstract and additional
information may be reduced or even hidden.

![The 4 options for how to display research on your
profile](images/change-layout.png "image displaying layout options for
research on My Profile")


## Manage Versions

It is possible to create a snapshot of your exposition, which you can
restore later.

A snapshot is created by going to ☰ > __versions__ and clicking __add
snapshot__.

![version dialog](images/manage-versions.png "manage
versions dialog")

When you restore a snapshot, the original is not overwritten, instead
a new exposition will be created from the snapshot.

There are three options for how to deal with the
[collaboration](#collaborating-on-research) settings of a restored
snapshot:

* __private__ remove all collaborators (only you can see the restored
  exposition snapshot).
* __restore__ the collaboration will be as it was when the snapshot
  was taken.
* __keep__ the collaboration as it is in the current version of the
  exposition.

One can also restore as private and change the settings afterwards of
course, through the collaboration and share menus.

### Versions of Published Expositions

Published expositions cannot be changed in the RC (this is per
definition, to allow referencing content within these expositions by
other researchers), but duplicates can.

To get an editable duplicate of a published exposition one has to:

1. make a snapshot of the published exposition.
2. restore the snapshot.

This duplicate can now be edited, without the changes having effect on
the original published exposition.

## Edit Research

This dialog can be opened by __☰ > edit details__ or clicking the
title of the exposition in the workspace editor. It allows you to edit metadata, collaborations with other users and the table of contents.

![Edit research dialog, showing meta page](images/edit-research.png "edit research dialog")

* __Meta data__ change the:
  -  __title__ (*)
  -  __date__ (*)
  -  __abstract__ (*)
  -  __keywords__ use this to make your exposition easier to find. The RC currently uses an open vocabulary, please take care to not needlessly duplicate terms, the field will automatically suggest existing terms.
  -  __affiliation__
  -  __external link__
  -  __entry page__ the page the exposition starts at

(*) = __title__ and __abstract__ are obligatory.

__Author Pseudonym__: by default an exposition always appears under the name of the user(s) that have edited it. The __author pseudonym__ field allows you to customize what is displayed as author, for example if you are publishing an exposition as a group (ie "The Beatles", "Monty Python") or when representing somebody or something else. If an __author pseudonym__ is provided,
the author pseudonym will replace the authors names wherever the work is shown
on RC (and in the [DOI](https://www.doi.org) deposit, if the exposition is
published). 

### Being Anonymous

<strong style="color:red">Important: using a pseudonym does not make you fully anonymous</strong>, as the authors and co-authors will still be displayed in the metadata (contributors are not shown). The only way to be fully anonymous, is to request an ALIAS for your account as a whole. You can request an ALIAS by contacting:
[support@researchcatalogue.net](mailto:support@researchcatalogue.net). In this case, your own name will not be shown anywhere in public pages of the RC, however even with an ALIAS, SAR will still be able to indentify the user that created the exposition if there is copyright infringement or other illegal material.

* __Table of content__ change the content menu, which the user can use
to navigate between pages.  See [table-of-content](#table-of-content).

* __Collaboration__ add co-authors, editors and supervisors.  See
[collaboration](#collaborating-on-research)

* __Relations__ create relationships with other objects on your
  profile, which will result in them being listed on the Research
  page. 

### Grouping

Default groupings: When you create a set or exposition the new objects will appear in
default groupings ("Sets" and "Expositions"). If you are invited to
one by another RC user, they will appear under "Expositions
(collaborated)".

Custom grouping: You can also create your own groupings. To add a new grouping click "add grouping" and enter the name of the
grouping. You can sort your objects within a grouping, arrange the groupings
themselves and move object between groups via drag and drop. Click and
drag a grouping itself to change the order of the groups.

On the right-hand side of a grouping's title, there are a series of
icons displayed. Here you can edit and delete the grouping and control
its public visibility (using the circle icon).

Only custom grouping can be deleted. If you have only one grouping
containing content, its title will not be shown on your public
profile. Empty groupings will also not be displayed on your public
profile page.

### Cleaning up Cluttered Profiles:

You can delete expositions you have created by clicking ☰ -> delete exposition.
Expositions which are in review or published cannot be deleted. Please note that
deleting an exposition is permanent.

If you are co-author, contributor or supervisor of an exposition, you
can "leave collaboration" to remove the exposition from your profile.

You can open / close groupings by clicking the small triangle on the
left of the grouping. You can also make the box of an exposition
smaller by clicking ☰ -> change layout. It can also be easier to get
an overview by using your browsers zoom (ctrl/cmd + ctrl/cmd -). 
You can return to default zoom level with ctrl/cmd 0.


## Legacy

### Add Work

Works are an older feature, which has now been replaced by media sets
through the [media repository](#media-repository).  If you had created
works previously, you can still edit or remove them.

### Add Project 

Projects were part of an external import of data, they are no longer
available for users.
