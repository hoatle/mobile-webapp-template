catalog_display
===============


API Files
------------

Contain two sections. The first section is the schema of the "model" and the second section is sample data, in JSON format, as it would be delivered by the server side API. 

Relationships are described in the schema sections. In the two initial files, for the Catalog display, we have JSON models for Category and Product, which in effect have a many-to-many relationship (e.g. a product can exist in several Categories and a Category can be associated with any number of Products). However in this case, Categories are hierarchical; there are two top-level categories that contain sub-categories.

Note that the data are served such that there are two top-level keys, 'Meta' and 'Objects.' The actual data are under Objects. Rewriting the Backbone parse function would probably help.

Note Products have a set of images associated with them. Normally, it will be one main image with variants that have been resized on the server side. Each variant has its own url. These are returned in a JSON data package under "image_urls" as a javascript dictionary with the url name(description) as the key and the url itself as the value. The catalog layout should include the image of the appropriate size--even though you won't have sample images just now. 

Initial Design Goals
-------------------------
The initial goal is to present the catalog in a mobile format, using the top-level categories only (for now).

* The application must be a Backbone application, and must use Backbone Collections and Views for further structure.
* Backbone.Marionette is fine to use to remove some of the boilerplate code in Backbone.
* App would ideally be written in Coffeescript, but Javascript is fine as well, assuming it matches up with Google's Javascript style guides.
* The UI Widgets should be from jQueryMobile.

* UI should be a simple presentation of products, separated according to top-level category.
* UI should contain an unobtrusive way of swapping between category views.
* UI should assume each product will have an image (see above).


## Live development deployment at:
* http://catalog-hoatle.dotcloud.com/


## MVC
+ take advantage of convention over configuration.
+ any controller should be placed on 'controller' directory and extends 'controller/Controller', should be named with affix: 'Controller'.
+ any view should be placed on 'view' directory and extends 'view/BaseView', should be named with affix: 'View'.

### url mapping with MVC
+ By default, application uses hash value for router to dispatch to accordingly controller by pattern: /:controller/:action/*params.

## Run the application

+ Make sure to have latest node installed (with version as 0.6.x and above)
+ Make sure to have 'make'

+ You must run this command first to have node modules installed: ```make``` or ```make resolve```

+ Check style with jshint: ```make check-style```

+ Test the application: ```make test```

+ Run the application on development mode: ```make run-dev```

+ Run this application on production mode: ```make run-prod```

+ Access application: http://localhost:8080

+ Access browser tests: http://localhost:8080/browser (only on development mode)

+ Package the production application: ```make package```

+ Clean the production application build: ```make clean```

## Develop web application for phonegap?
* On Android:
  * Copy all files and directories of ```webapp-template``` to ```assets``` directory
  * Copy ```cordova-{version}.js``` to ```webapp``` directory
  * On **dev mode**: Set ```super.loadUrl("file:///android_asset/webapp/index.html");```
  * On **prod mode**:
      * Run these commands: ```make resolve```, then ```make install```
      * Set ```super.loadUrl("file:///android_asset/public/index.html");```
  * Packaging:
      * Make sure on prod mode
      * Keep only ```public``` directory
      * Packaging the app as normal Android application and you're done :-)

## Make build lifecycle phrases:

+ clean
+ resolve (dependencies resolver)
+ check-style (check-style-common, check-style-vsf)
+ test (test-common-unit, test-vsf-unit)
+ package
+ install
+ run-dev
+ run-prod
+ run (as same as run-prod)
+ deploy

## Deployment

There are built-in configurations for heroku and dotcloud. Just push this repo and it will be deployed.

## FAQ

+ I get this error below when running ```make run```, ```make run-dev``` or ```make run```:
<pre>
make run-prod
cp -rf webapp public
./node_modules/.bin/r.js -o prod.build.js
make: ./node_modules/.bin/r.js: Command not found
make: *** [install] Error 127
</pre>

=> The node modules are not installed. You need to run: ```make resolve``` first. ```resolve``` target can not make it into ```make run```
as it will involve ```npm install``` and heroku does not allow ```npm`` (?) on deployment. The error is something like this:
<pre>
2012-06-18T19:26:18+00:00 heroku[web.1]: State changed from crashed to created
2012-06-18T19:26:18+00:00 heroku[web.1]: State changed from created to starting
2012-06-18T19:26:20+00:00 heroku[web.1]: Starting process with command `make run`
2012-06-18T19:26:20+00:00 heroku[slugc]: Slug compilation finished
2012-06-18T19:26:20+00:00 app[web.1]: rm -rf public
2012-06-18T19:26:20+00:00 app[web.1]: npm install
2012-06-18T19:26:20+00:00 app[web.1]: make: npm: Command not found
2012-06-18T19:26:20+00:00 app[web.1]: make: *** [resolve] Error 12
</pre>

+ I get this error below when running the command: ```make run-prod```:
<pre>
./node_modules/.bin/r.js -o prod.build.js
./node_modules/.bin/r.js: 1: /bin: Permission denied
</pre>

=> Please make sure you have the project under a directory that you have write permission on files.

+ I get error below when running the command: ```make run```, ```make run-dev``` or ```make run-prod```:
<pre>
Error: listen EADDRINUSE
   at errnoException (net.js:670:11)
   at Array.0 (net.js:771:26)
   at EventEmitter._tickCallback (node.js:190:38)
</pre>

=> You need to change the default port (8080) on server.js to another not used port and it should work.
