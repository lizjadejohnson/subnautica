const React = require('react');
class Recipes extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.message}</h1>
                </body>
            </html>
        );
    }
}
module.exports = Recipes;