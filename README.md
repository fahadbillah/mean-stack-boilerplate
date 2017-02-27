![Sub Contractor Management REST Backend](http://maxgroup-bd.com/wp-content/uploads/2015/03/logo_black-fi.jpg "Sub Contractor Management REST Backend") 
# mean-stack-boilerplate

***MEAN stack boilerplate for web***

***

### Contribution rules

First create **issue** then assign it to corresponding list of **github project**

#### :no_entry_sign: Never push to `master` or `dev` :no_entry_sign:

For every new coding task create a new branch from dev/last_working_branch. Follow **GIT Branch Naming Convention** mentioned below.


### GIT Branch Naming Convention

Basic branch name format: `branch_type-task_group/task_details`

| branch_type* | - (separated by) |  task_group* | / (separated by) |     task_details     |              Full Example             |
|:------------:|:----------------:|:------------:|:----------------:|:--------------------:|:-------------------------------------:|
|    feature   |         -        |     login    |         /        |      login_form      | feature-login/login_form              |
|     test     |         -        |     login    |         /        |   login_validation   | test-login/login_validation           |
|      fix     |         -        | registration |         /        | duplicate_user_check | fix-registration/duplicate_user_check |
|  translation |         -        | registration |         /        |     success_page     | translation-registration/success_page |


### GIT Commit Push Cycle

Every morning pull from `dev` branch to your branch. Every night commit & push to your branch.

### Pull request

Before creating pull request to `dev`, pull `dev` branch to your branch. If any conflict occur resolve then commit & push to your branch. After that create pull request from online.
