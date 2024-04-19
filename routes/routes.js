//Eventually break up these routes into individual route files, e.g. resources.js for just the resources routes.

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const recipes = require('../data/recipes');
const resources = require('../data/resources');
const { updateUsageInRecipes } = require('../dataManager');

//Note that the /resources etc. above refer to what URL the user is going to. The ./about above refers to the location of that data in our app.

router.use(bodyParser.urlencoded({ extended: true }));

//      -----INDEX ROUTES-----     //

router.get('/', (req, res) => {
    res.render('Index', { title: 'Index', message: 'Subnautica Resource and Recipe Manager' });
});

//      -----RESOURCES ROUTES-----     //

    // ADD NEW RESOURCES ROUTES //

    // GET route for adding a recipe - this needs to be defined before any /:id routes!
router.get('/resources/add', (req, res) => {
    res.render('AddResource', { title: 'Add New Resource' });
});

    //POST route for adding a new resource
router.post('/resources/add', (req, res) => {
    const { name, description, location } = req.body;

    const newId = resources.reduce((max, r) => r.id > max ? r.id : max, 0) + 1;

    const newResource = {
        id: newId,
        name,
        description,
        location,
        usedInRecipes: [] // Ensure this is always an array
    };

    resources.push(newResource); // Add the new recipe to the array
    updateUsageInRecipes(recipes, resources); // Update usage links
    console.log('New resource added:', newResource); // Log the new recipe object
    res.redirect('/resources');
});


    //Get all resources:
router.get('/resources', (req, res) => {
    res.render('Resources', { title: 'Resource Guide', resources: resources });
});

    //Get resource by ID:
router.get('/resources/:id(\\d+)', (req, res) => {
    //Was conflicting with add resource, this regex just means it has to be a number
    const resource = resources.find(r => r.id === parseInt(req.params.id));
    if (resource) {
        res.render('resourceDetail', { title: resource.name, resource });
    } else {
        res.status(404).send('Resource not found');
    }
});

//      -----RECIPES ROUTES-----     //

    // ADD NEW RECIPES ROUTES //

    // GET route for adding a recipe - this needs to be defined before any /:id routes!
router.get('/recipes/add', (req, res) => {
    res.render('AddRecipe', { title: 'Add New Recipe' });
});

    //POST route for adding a new recipe
router.post('/recipes/add', (req, res) => {
    const { name, description, category, components } = req.body;
    console.log('Received components:', components); // Log the raw component string from the form

    const newId = recipes.reduce((max, r) => r.id > max ? r.id : max, 0) + 1;
    if (!components) {
        return res.status(400).send("Components must be provided in the correct format.");
    }

    const newComponents = components.split(';').map(comp => {
        const parts = comp.split(',');
        if (parts.length !== 2 || isNaN(parseInt(parts[1]))) {
            return res.status(400).send("Each component must be provided in name,amount format.");
        }
        return { name: parts[0], amount: parseInt(parts[1]) };
    });

    console.log('Formatted components:', newComponents); // Log the structured component array

    const newRecipe = {
        id: newId,
        name,
        description,
        category,
        components: newComponents,
        usedInRecipes: [] // Ensure this is always an array
    };

    recipes.push(newRecipe); // Add the new recipe to the array
    updateUsageInRecipes(recipes, resources); // Update usage links
    console.log('New recipe added:', newRecipe); // Log the new recipe object
    res.redirect('/recipes');
});
    


    //Get ALL Recipes:
router.get('/recipes', (req, res) => {
    res.render('Recipes', { title: 'Recipe Guide', recipes: recipes });
});

    //Get Recipe by ID:
router.get('/recipes/:id(\\d+)', (req, res) => {
    //Was conflicting with add recipe, this regex just means it has to be a number
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