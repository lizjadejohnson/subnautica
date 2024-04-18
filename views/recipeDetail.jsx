const React = require('react');

class RecipeDetail extends React.Component {
    render() {
        const { recipe } = this.props;
        return (
            <html>
                <head>
                    <title>{recipe.name}</title>
                </head>
                <body>
                    <h1>{recipe.name}</h1>
                    <p>Description: {recipe.description}</p>
                    <p>Location: {recipe.location}</p>
                    <p>Used In: {recipe.usedIn.join(", ")}</p>
                </body>
            </html>
        );
    }
}

module.exports = RecipeDetail;
