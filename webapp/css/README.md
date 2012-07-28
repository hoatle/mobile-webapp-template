## css directory for theme and style.

* bootstrap directory contains all .less files from the project. Don't touch these files at all for easier upgrade later.
* to customize bootstrap, clone "default" theme directory with your theme name and modify variables.less file within that folder.
* application.less is the main entry point of the application, include theme .less file and necessary .less stuff for it to work.

* as the project does not require bootstrap, but jquery-mobile. The jquery mobile stuff is located
at jqmobile from https://github.com/jquery/jquery-mobile/tree/1.1.1/css. themes is moved to theme
directory of this project (theme/default/jquery.mobile.css and jquery.mobile.theme.css). This will
be easy to upgrade.
