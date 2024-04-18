//Eventually break up these routes into individual route files, e.g. resources.js for just the resources routes.

const express = require('express');
const router = express.Router();


//      -----INDEX ROUTES-----     //

router.get('/', (req, res) => {
    res.render('Index', { title: 'Index', message: 'Welcome to the Home Page!' });
});

//      -----RESOURCES ROUTES-----     //

    //Get all resources:
router.get('../data/resources', (req, res) => {
    res.render('Resources', { title: 'Resource Catalog', message: 'A searchable database of all resources available in the game.' });
});

router.get('../data/resources/:resourceId', (req, res) => {
    const resourceId = req.params.resourceId;
    res.send(`Information for resource with ID: ${resourceId}`);
});

//      -----RECIPES ROUTES-----     //
router.get('/recipes', (req, res) => {
    res.render('Recipes', { title: 'Recipe Guide', message: 'A list of crafting recipes and their required resources and where to find them.'});
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