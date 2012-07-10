catalog_display
===============

------------
##API Files


Contain two sections. The first section is the schema of the "model" and the second section is sample data, in JSON format, as it would be delivered by the server side API. 

Relationships are described in the schema sections. In the two initial files, for the Catalog display, we have JSON models for Category and Product, which in effect have a many-to-many relationship (e.g. a product can exist in several Categories and a Category can be associated with any number of Products). However in this case, Categories are hierarchical; there are two top-level categories that contain sub-categories.

##Initial Design Goals

