//Eventually break up these routes into individual route files, e.g. resources.js for just the resources routes.

const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes');
const resources = require('../data/resources');

//Note that the /resources etc. below refer to what URL the user is going to. The ./about above refers to the location of that data in our app.

//      -----INDEX ROUTES-----     //

router.get('/', (req, res) => {
    res.render('Index', { title: 'Index', message: 'Welcome to the Home Page!' });
});

//      -----RESOURCES ROUTES-----     //

    //Get all resources:
router.get('/resources', (req, res) => {
    res.render('Resources', { title: 'Resource Catalog', message: 'A searchable database of all resources available in the game.', resources });
});

    //Get resource by ID:
router.get('/resources/:id', (req, res) => {
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (resource) {
        res.render('resourceDetail', { title: resource.name, resource });
    } else {
        res.status(404).send('Resource not found');
    }
});

//      -----RECIPES ROUTES-----     //
router.get('/recipes', (req, res) => {
    res.render('Recipes', { title: 'Recipe Guide', message: 'A list of crafting recipes and their required resources and where to find them.'});
});


router.get('/recipes/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    console.log(recipe); // Log the found recipe or undefined
    if (recipe) {
        res.render('recipeDetail', { title: recipe.name, recipe });
    } else {
        res.status(404).send('Recipe not found');
    }
});

//      -----USER ROUTES-----     //
router.get('/user', (req, res) => {
    res.render('User', { title: 'User Info'});
});

//If we had more even more files, this can just keep going on e.g.
//router.get('/contact', (req, res) => {
//    res.render('Contact', { title: 'Contact Page', message: 'Contact us here.' });
//});

module.exports = router;