const React = require('react');
class Resources extends React.Component {
    render() {
        const { resources } = this.props; // Ensure resources are passed as a prop
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />

                </head>
                <body>
                <div className="content">
                        <h1>Resources</h1>
                        <ul>
                            {resources.map(resource => (
                                <li key={resource.id}>
                                    <a href={`/resources/${resource.id}`}>{resource.name}</a>
                                </li>
                            ))}
                        </ul>
                        <a href='/'><button className="button">⬅️ Home</button></a>
                        <a href='/resources/add'><button className="button">➕ Add</button></a>
                    </div>
                </body>
            </html>
        );
    }
}
module.exports = Resources;