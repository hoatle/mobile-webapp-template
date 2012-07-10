catalog_display
===============


API Files
------------

Contain two sections. The first section is the schema of the "model" and the second section is sample data, in JSON format, as it would be delivered by the server side API. 

Relationships are described in the schema sections. In the two initial files, for the Catalog display, we have JSON models for Category and Product, which in effect have a many-to-many relationship (e.g. a product can exist in several Categories and a Category can be associated with any number of Products). However in this case, Categories are hierarchical; there are two top-level categories that contain sub-categories.

Note that the data are served such that there are two top-level keys, 'Meta' and 'Objects.' The actual data are under Objects. Rewriting the Backbone parse function would probably help.

Initial Design Goals
-------------------------
The initial goal is to present the catalog in a mobile format, using the top-level categories only (for now).

* The application must be a Backbone application, and must use Backbone Collections and Views for further structure.
* Backbone.Marionette is fine to use to remove some of the boilerplate code in Backbone.
* App would ideally be written in Coffeescript, but Javascript is fine as well, assuming it matches up with Google's Javascript style guides.
* The UI Widgets should be from jQueryMobile.

* UI should be a simple presentation of products, separated according to top-level category.
* UI should contain an unobtrusive way of swapping between category views.
* UI should assume each product will have an image (see Product schema file).


