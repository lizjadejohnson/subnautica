require('events').EventEmitter.defaultMaxListeners = 15; // Increase the limit

const express = require('express');
const app = express();

// Data management
const { updateUsageInRecipes } = require('./dataManager');
const resources = require('./data/resources');
const recipes = require('./data/recipes');


// Update relationships
updateUsageInRecipes(recipes, resources);


// Setting up JSX View Engine
app.set('views', __dirname + '/views'); // Directory for views
app.set('view engine', 'jsx'); // Use .jsx files
app.engine('jsx', require('express-react-views').createEngine());

//Import our routes:
const routes = require('./routes/routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});