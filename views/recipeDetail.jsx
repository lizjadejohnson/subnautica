const React = require('react');

class RecipeDetail extends React.Component {
    render() {
        const { recipe } = this.props;
        if (!recipe) {
            return <div className="card">Recipe Not Found</div>;
        }

        const imageUrl = `/img/recipes/${recipe.id}.webp`; // Construct the image URL dynamically

        return (
            <html>
                <head>
                    <title>{recipe.name}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />


                </head>
                <body>
                    <div className='card'>
                    <img src={imageUrl} className="card-image" alt={`Image for ${recipe.name}`} />
                    <div className="card-content">
                            <h1>{recipe.name}</h1>
                            <p>Description: {recipe.description}</p>
                            <p>Components Required:</p>
                                <ul>
                                    {recipe.components && recipe.components.length > 0 ? (
                                        recipe.components.map((component, index) => (
                                            <li key={index}>{component.name}: {component.amount}</li>
                                        ))
                                    ) : (
                                        <li>No components listed</li>
                                    )}
                                </ul>

                            <p className="category">Category: {recipe.category}</p>
                            <p className="used-in">Used In: {recipe.usedInRecipes.join(", ") || "TBD"}</p>
                            <a href="/recipes"><button>⬅️ Back</button></a>
                            <form action={`/recipes/${recipe.id}/delete`} method="POST">
                                <button type="submit" className="button">❌ Delete Recipe</button>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = RecipeDetail;

/* Iterating Over Resources: Instead of attempting to directly display recipe.resources.name e.g., which is not valid,
the updated code maps over recipe.resources and renders each item in a list.
This is done using the .map() function, which is appropriate for rendering arrays in React. */