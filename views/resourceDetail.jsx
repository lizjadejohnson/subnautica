const React = require('react');

class ResourceDetail extends React.Component {
    render() {
        const { resource } = this.props;
        if (!resource) {
            return <div className="card">Resource Not Found</div>;
        }

        const imageUrl = `/img/resources/${resource.id}.webp`; // Construct the image URL dynamically

        return (
            <html>
                <head>
                    <title>{resource.name}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />
                </head>
                <body>
                    <div className='card'>
                        <img src={imageUrl} className="card-image" alt={`Image for ${resource.name}`} />
                        <div className="card-content">
                            <h1>{resource.name}</h1>
                            <p>Description: {resource.description}</p>
                            <p className="location">Location: {resource.location}</p>
                            <p className="used-in">Used In: {resource.usedInRecipes.join(", ") || "TBD"}</p>
                            <a href="/resources" className="button">Back</a>

                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ResourceDetail;
