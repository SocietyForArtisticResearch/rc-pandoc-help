# Administration: Reviewing process

## Introduction

This is a tutorial to describe how an RC Portal can be used for publication workflows. It is aimed at portal administrators.
The process typically consists of 4 stages: 

* setting up accounts
* writing the content by the author(s), possibly in collaboration with other RC users.
* reviewing of the exposition by reviewers
* publication 

## Setting up accounts

There are two ways of setting up accounts: 

1. The author can create an account for him/her self, by clicking [REGISTER](https://www.researchcatalogue.net/portal/register "Registration on the Research Catalogue") on the research catalogue homepage. After filling in the form the author will immediatly get a basic account. To gain a full account, which has the right to create content, the author will be requisted to send a proof of identity and signed SAR agreement letter. 

2. The portal admin creates the account(s) for the author(s). This option is common when a large number of users need be created at once. In this case, the responsibility of identification and making sure that the SAR agreement letter is signed lies with the portal administrator creating the account(s). The agreement letter can be found on basecamp or requirested through RC support. Please send the signed agreement letters to RC user support.

The administrator can create accounts by going to the __[admin section](https://www.researchcatalogue.net/admin)__ and opening the __user__ page. Click __+__ at the right top corner of the screen. After creating the account, the username (which is an email address) and password can be sent through email. Be sure that in the roles tab, the "basic account" option is turned __off__. This means the user will have a full account and is able to create content.

![edit user roles dialog](images/user-roles.png "Image showing edit user roles dialog")

For safety, admins creating user accounts should:

- Use a unique password for each new user.
- Make the password sufficiently random (current standard is at least 12 characters).

Safer is to have the student make their own limited account (through normal [registration](https://www.researchcatalogue.net/portal/register)) and add them to
the portal afterwards.  Alternatively, you could also generate a long
random password and throw it away immediately, then ask the user to
reset the password themselves using
<https://www.researchcatalogue.net/portal/forgotten-password>.

## Writing the exposition, collaboration

The next stage is the writing of the *exposition* itself. It is important to note that it has to be an *exposition*, a *work* object on its own cannot enter a review workflow on the RC. *Works* can however be embedded as part of an exposition to be reviewed & published. The author does not need to be a member of the portal user list in order to make a publication request to it.

During the writing stage, it is common that the exposition in progress is shared with one or more other readers or collaborators. These collaborators can use the notes system to leave feedback. There are three types of collaboration roles:

- supervisor (no edit permissions, but can leave notes)
- co author (full edit permissions)
- contributor (full edit permissions, but not mentioned in meta-data)

The author can invite RC users to these roles by going to edit details or clicking on the title of their exposition in the workspace editor and choosing "collaboration". The collaborators will receive an invitation (in RC messages) that has to be accepted before they can start to collaborate.

![collaboration tab](images/collaboration.png "Image showing the collabration tab")

## Requesting publication

Once the writing is sufficiently progressed, the next step is that the
author sents a request to review the exposition. This is done through
the ☰ menu, which is located on the "my profile" in the right bottom
corner of the exposition summary. This will open a dialog where he/she
can choose in which portal the exposition is to be reviewed and possibly published. 


![Exposition submission dialog](images/submit_for_review.png "Dialog for submission for review")

Once the author has done this step, no further changes can be made to the exposition by the author. It will be listed on their profile under the status "in review". 

The portal admin will receive a message from the RC that a new work is ready for review. It will also be available under the “reviewing” section in the __[admin section](https://www.researchcatalogue.net/admin)__.

The expositions content is locked for the author(s) during the review
process, only the portal admin can edit.  If the author needs to
revision the content, it is possible to 
temporarely open for editing by clicking the "in revision" button <img
class="icon" src="images/revision-action.png" />. This will open a
dialog where you can put the exposition "in revision". During
revision, the exposition will remain listed in the reviewing
page. Once the author is done, they can either resubmit themselves
from their profile page, or the administrator can use the button in
the "reviewing" page to change the status back to "in review".

If the publication was by accident or to the wrong portal, the
publication request can be declined by the portal
administrator. He/she can also do this under __administration >
reviewing__ and clicking the __X__ next to the research title. This
will also open the exposition for editing again.

### Reviewing, assigning reviewers

The most common next step is to assign reviewers to this research. However, for a person to be available as reviewer, they first have to:

1. have an RC account 
2. added to the reviewer pool of the portal.

The reviewer role does not require a full RC account, it is enough to be a limited RC user. 

For the second requirement, the user has to be added to the reviewer pool of the portal. This can be done by going to the __Portal__ page of the __[admin section](https://www.researchcatalogue.net/admin)__ and then choosing edit. Under the ROLES tab, RC users can be added as reviewers for that particular portal. 

Once a reviewer is part of the review pool, they can be added to the research exposition. To do this, go to __review__ tab of the __administration__ part of the RC, and click the edit page. Here you can add (or remove) reviewers to the research. Reviewers can be either added single blind (they cannot see each other), or double blind (they cannot see the author's name).


![the edit request page, found when clicking edit icon on an exposition in review](images/edit-request.png "image showing edit request, within the review tab")

The reviewers will see a list of expositions that they are reviewers of on top of their "my profile" page. Within the exposition they can use the "REVIEW" menu to leave notes to themselves, which are only visible to them and the portal administrator. Typically further communication between the portal admin and the reviewer takes place through the messaging system or by e-mail.

## Final publication or rejection

Once the review process has been completed, the portal can choose to
either publish or dismiss the exposition. If the exposition is
dismissed, this means that the editing rights are returned to the
author. The author can resubmit the same exposition later, at which
point the review process starts again. Instead of rejecting, one can
also put the exposition ["in revision"](#in-revision "in revision
documentation"), which means the author can make changes, while the
exposition is still listed on the "reviewing" tab of administration.

If the exposition is accepted, the exposition will be frozen
permanently from further changes. You will need to select a range and
an issue for the exposition to be published in.

The range controls to who the exposition will be visible:

| **range**         | **who can see it?**              |
|-------------------|----------------------------------|
| Limited to portal | Members of the portal can see it |
| Unlimited         | All visitors                     |
| Archived          | Portal admins                    |



*Tip: When your portal publishes its very first exposition, you will
first want to create a new issue in the
[issue](https://www.researchcatalogue.net/admin/issue/list "link to
admin issue page") page, since all expositions need to be part of an
issue. The issue's range should match that of the exposition. The
default range of an issue is unlimited.*

![Dialog for accepting the publication request](accept_request.png "Dialog for accepting the request")


Depending on the portal settings at this point also a DOI will be
deposited through cross-ref. Please note that publishing is meant as a
one-way step, unpublishing is to be used only as a very last resort
measure. If one already expects that the exposition will be removed in
the future, it should not be published. In that case one could better
return the exposition to the author(s) and have them share it using
the standard sharing options of the RC.

Immediately after publication the exposition will show up on the RC
frontpage (in the case its range is Unlimited). It is recommended
that keywords are added to publications, so they can more easily be
retrieved. Keywords can also be added after publication, on the
research list.




