const React = require('react');

class ResourceDetail extends React.Component {
    render() {
        const { resource } = this.props;
        return (
            <html>
                <head>
                    <title>{resource.name}</title>
                </head>
                <body>
                    <h1>{resource.name}</h1>
                    <p>Description: {resource.description}</p>
                    <p>Location: {resource.location}</p>
                    <p>Used In: {resource.usedInRecipes.join(", ")}</p>
                </body>
            </html>
        );
    }
}

module.exports = ResourceDetail;
