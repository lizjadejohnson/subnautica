const React = require('react');
class Resources extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />

                </head>
                <body>
                    <h1>{this.props.message}</h1>
                </body>
            </html>
        );
    }
}
module.exports = Resources;