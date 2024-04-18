const express = require('express');
const app = express();

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