# Blog-App
Blog app demo. Used NodeJS for serverside, MongoDB for database, Semantic UI for stylesheet
<p> RESTful Routing </p>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>RESTful Routes</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="jumbotron">
                <h1>RESTful Routes</h1>
                <p><strong>Restful Routes used in this project</strong></p>
            </div>
        </div>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Path</th>
                    <th>Http Verb</th>
                    <th>Purpose</th>
                    <th>Mongoose Method</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Index</td>
                    <td>/dogs</td>
                    <td>GET</td>
                    <td>Displays a list of all dogs</td>
                    <td>Dog.find()</td>
                </tr>
                <tr class="success">
                    <td>New</td>
                    <td>/dogs/new</td>
                    <td>GET</td>
                    <td>Displays a form to make a new dog</td>
                    <td>N/A</td>
                </tr>
                <tr class="success">
                    <td>Create</td>
                    <td>/dogs</td>
                    <td>POST</td>
                    <td>Add a new dog to database</td>
                    <td>Dog.create()</td>
                </tr>
                <tr class="info">
                    <td>Show</td>
                    <td>/dogs/:id</td>
                    <td>GET</td>
                    <td>Shows info about one dog</td>
                    <td>Dog.findById()</td>
                </tr>
                <tr class="warning">
                    <td>Edit</td>
                    <td>/dogs/:id/edit</td>
                    <td>GET</td>
                    <td>Shows edit form for one dog</td>
                    <td>Dog.findById()</td>
                </tr>
                <tr class="warning">
                    <td>Update</td>
                    <td>/dogs/:id</td>
                    <td>PUT</td>
                    <td>Update a particular dog, then redirect somewhere</td>
                    <td>Dog.findByIdAndUpdate()</td>
                </tr>
                <tr class="danger">
                    <td>Destroy</td>
                    <td>/dogs/:id</td>
                    <td>DELETE</td>
                    <td>Delete a particular dog, then redirect somewhere</td>
                    <td>Dog.findByIdAndRemove()</td>
                </tr>
            </tbody>
        </table>
    </div>
</div> 

</body>
</html>
