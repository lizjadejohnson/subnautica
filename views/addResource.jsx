const React = require('react');

class AddResource extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <title>Add New Resource</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="/css/main.css" />
                </head>
                <body>
                    <h1>Add a New Resource</h1>
                    <form action="/resources/add" method="post">
                        <label htmlFor="name">Resource Name:</label>
                        <input type="text" id="name" name="name" required /><br/>

                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" required /><br/>

                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" required /><br/>

                        <button type="submit" className="button">✅ Save</button>
                        <a href="/resources" className="button-link">⬅️ Back</a>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = AddResource;
