const React = require('react');

class AddRecipe extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <title>Add New Recipe</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />
                </head>
                <body>
                    <h1>Add a New Recipe</h1>
                    <form action="/recipes/add" method="post">
                        <label htmlFor="name">Recipe Name:</label>
                        <input type="text" id="name" name="name" required /><br/>

                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" required /><br/>

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" required /><br/>

                        <label htmlFor="components">Components (format: name,amount;name,amount):</label>
                        <input type="text" id="components" name="components" required /><br/>

                        <button type="submit" className="button">✅ Save</button>
                        <a href="/recipes" className="button-link">⬅️ Back</a>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = AddRecipe;
