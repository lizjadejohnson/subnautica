const React = require('react');

class RecipeDetail extends React.Component {
    render() {
        const { recipe } = this.props;
        // Check if the recipe or components is undefined before attempting to render them
        if (!recipe || !recipe.components) {
            return (
                <html>
                    <head>
                        <title>Recipe Not Found</title>
                    </head>
                    <body>
                        <h1>Recipe Not Found</h1>
                        <p>The requested recipe could not be found or has no components listed.</p>
                    </body>
                </html>
            );
        }

        return (
            <html>
                <head>
                    <title>{recipe.name}</title>
                </head>
                <body>
                    <h1>{recipe.name}</h1>
                    <p>Description: {recipe.description}</p>
                    <p>Components Required:</p>
                    <ul>
                        {recipe.components.map((component) => (
                            <li key={component.name}>{component.name}: {component.amount}</li>
                        ))}
                    </ul>
                    <p>Category: {recipe.category}</p>
                    <p>Used In: {recipe.usedInRecipes.join(", ")}</p>
                </body>
            </html>
        );
    }
}

module.exports = RecipeDetail;


/* Iterating Over Resources: Instead of attempting to directly display recipe.resources.name e.g., which is not valid,
the updated code maps over recipe.resources and renders each item in a list.
This is done using the .map() function, which is appropriate for rendering arrays in React. */