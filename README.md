# CS-311-Project-3


Brief

Alien Recipe Generator

You're working for an artsy company. Perhaps its Meow Wolf, or a games company. They're leaning in to procedural generation, and want to have an app that generates possible "recipes" that can be displayed in their artistic experience - and then tagged by users, and saved, if the users found them particularly interesting.


Process document

CS311 – Project 3 Process Document.pptxDownload CS311 – Project 3 Process Document.pptx

 

Requirements

Tables for ingredients, for cooking methods, for "cooking steps" (*see note), for saved recipes, and for descriptor tags.
Forms for inserting new ingredients and cooking methods
Requires adding a new name for the ingredient and at least one 'tag' for the ingredient
A form for inserting cooking steps takes in and stores a template string (or an L-system*)
Does not have to validate the template
A "generate recipe" page that goes through this flow:
Users select 2-5 tags from the database, and the # of steps in the recipe
Based on the tags and the # steps, selects enough ingredients and methods to fill the steps
If not enough steps or ingredients, just repeat
Displays these steps filled in with the ingredients for the user to see
On the same page -> a field for naming the generated recipe, a field for uploading an image for the recipe, and a button to save the named item into the db
A "search recipes" page that allows individuals to search for recipe by name / tag, displays the results
A "individual recipe" page that shows the information for that recipe (image, steps, name, likes)
A "like" button that, every time it is clicked, increases the #of likes on the recipe, and updates the display
 

* A template is a string that contains placeholders to replace some text with some other text. For instance:
"beat [ingredient] for 10 minutes."
For more fun - make this template a grammar that can replace parts of the string with more bits of template before final evaluation, like a L-systemLinks to an external site. or a grammarLinks to an external site. that produces a grammar. 

Learning Objectives

Design and deploy a database file with several relation types, including at least one has-and-belongs-to-many 
Develop for a mobile-aspect device
Perform data validity checks on input before data storage
Write accessible markup and code for users
Employ CSS frameworks to create pleasing user interfaces
Use animations to enhance application understandability and enjoyment
Verify the usability of an application through a usability test and analysis
Deliverables

A Powerpoint slide deck that contains
Your two milestone reflections
Your final reflection
A link to your github repo
A word document detailing your testing of the application
 

Grading

Database structure adequate for the application needs
Code is clean and well-structured
Code is well commented
Animations communicate application state and add a sense of interactivity
Data checking / validation on forms catches unacceptable data
Application is useable and aesthetically pleasing in a mobile display
A seed.js file that resets the database with starter code
All pages adhere to requirements (generate recipe, display all relevant information, allow searching)
