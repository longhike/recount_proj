# recount_proj
3 hour exercise for the recount - front end

## Description:
This exercise was done with static HTML/CSS/JavaScript for the front end (bootstrap included in CSS), and Node.js with an Express.js server for the back end. 

This is a single page application; switching pages with the buttons on the navbar will change div visibility, not re-route pages.

The page is fully mobile responsive.

## To run:
Clone repository, install dependencies with ```npm install``` and run with ```npm start```

## Functionality:

### Home:
If any individual person's div is clicked, the page will alert their siblings (if any), parents (if any), and children (if any).

### Edit Profile:
Template, non-functional:
1. if the user were being returned from a database, it would prepopulate the "placeholder" parameters for inputs and lists for parents, siblings, and children from the stored information.
2. if the user clicked any of the listed items, it would delete from the database.

