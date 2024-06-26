// This component will be rendered when we access the root URL/index of the Express application.

const React = require('react');
class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="stylesheet" href="/css/main.css" />

        </head>
        <body>
          <h1>
            Subnautica Resource and Recipe Manager
          </h1>
          <div className="links-container">
            <a href="/resources">Resources</a>
            <a href="/recipes">Recipes</a>
          </div>

        </body>
      </html>
    );
  }
}
module.exports = Index;
//Exporting the Index React class component
//This is the "Index" being referred to in the routes.js document when we say e.g.: res.render('Index' ...