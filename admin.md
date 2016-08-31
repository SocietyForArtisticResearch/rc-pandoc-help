# Administration Guide

## Administration Main Page

To reach the administration functionalities of the RC website, click on __administration__, located in the top right corner. To return to your own profile, you can click on the Research Catalogue logo. 

![admin main page](images/admin_main.png "image showing the administration main page")

There are 5 pages to manage content for portal admins:
* [__User__](#user-page "jump to user page documentation")   
  Adding, removing and editing user information to this portal

* [__Portal__](#portal-page "jump to portal page")
  Portal settings, reviewers, sending portal mails

* __Research__  
  Management of connected expositions

* __Connection Requests__  
  Management of connection requests

* __Reviewing__  
  Review process of expositions and objects that are waiting to be published

### multiple portals:
If you are an admin in multiple portals, you can switch between them in the top right corner of the site, through the drop down menu.

## User page

![admin user page](images/admin-user.png "image showing the admin user page") 

| Action         | Icon                                                |
| -------------- | --------------------------------------------------- |
| Add a user     | <img src="images/add.gif" class="icon">     |
| Edit a user    | <img src="images/edit.gif" class="icon">    |
| Remove a user  | <img src="images/remove.gif" class="icon">  |
| Login as a user| <img src="images/loginas.png" class="icon"> |

### add / edit a user

#### profile
![user profile dialog](images/user-profile.png "image showing user profile dialog")
Change the name, alias, email and password (optional).
An administrator can also change these fields without having to change the password (by leaving the field empty).

#### portal
![user portal settings dialog](images/user-portal.png "image showing user portal settings")

This controls to which portals a user is added. A user can be added to multiple portals at once. Portals which are selected are marked by a gray background.

#### roles
![user role settings dialog](images/user-roles.png "image showing user role settings")
When the option is turned on, the user cannot create any content. The can still become supervisors or read expositions.

#### settings
![user email settings dialog](images/user-settings.png "image showing user email settings")
Here you can set which emails the user should receive.

### log in as a user
While logged in as another user, you will see a red bar on the top of your window that shows who you are and enables you to switch back to your own account. This feature is useful while helping somebody with issues specific to their account.

Keep in mind: you become this user in all the tabs of your browser window, so you would temporarly loose some of you admin permissions while navigating as this user.



## Portal page

The portal tab shows you which users are administrators on the portal.
It has 3 actions:

| Action              | Icon                                                |
| --------------------| --------------------------------------------------- |
| Portal mail         | <img src="images/mail.png" class="icon">            |
| Edit portal settings| <img src="images/edit.gif" class="icon">            |
| Delete a portal     | <img src="images/remove.gif" class="icon">          |

### Portal mail
![portal mail dialog](images/portal-mail.png "image showing portal mail dialog")

* __testmode__ only sends a test mail to your account
* __type__ (default/digest/anouncement) currently not used
* __target__ who is going to receive the mail
* __content__ enter the text here

For advanced layout, you can use the HTML button. Please note that it is not recommended to use URI encoded images in email, since some email clients do not like this. Better practice is to have the images hosted somewhere externally and link form there using a <xmp> <img src=...> </xmp> tag.


### Portal edit screen

#### common
![portal edit common screen](images/portal-edit-common.png "image showing portal edit common dialog")
Here you can edit the basic information of the portal.
View text allows you to change the template that is used to display expositions on the portal page:
available placeholders: $author, $title, $portal, $edition, $published, $url, $now.

#### roles
![portal edit roles](images/portal-edit-roles.png "image showing the portal roles")
Here you can edit the various roles of the portal:

* Admins
* Reviewers (see [reviewing](#reviewing "jump to reviewing"))
* Contact persons (use this field to add persons that have an rc account)
* Contact persons (use this for people without an rc account)

#### issues
![portal edit issues](images/portal-edit-issues.png "image showing portal issues")
Here you can set the title of the issues (as in journal issues), one can use these in Reviewing.

#### submissions
![portal edit sumbmissions](images/portal-edit-submissions.png "image showing portal submissions")
Here you can set which objects can be submitted to the portal.





## Research page

## Connection requists

## Reviewing 