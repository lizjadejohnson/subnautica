const React = require('react');

class Recipes extends React.Component {
    render() {
        const { recipes } = this.props; // Ensure recipes are passed as a prop
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />
                </head>
                <body>
                    <div className="content">
                        <h1>Recipes</h1>
                        <ul>
                            {recipes.map(recipe => (
                                <li key={recipe.id}>
                                    <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
                                </li>
                            ))}
                        </ul>
                        <a href='/'><button className="button">⬅️ Home</button></a>
                        <a href='/recipes/add'><button className="button">➕ Add</button></a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Recipes;
