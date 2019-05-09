// Install Express Server

const express = require('express');

const path = require('path');

const app = express();

const Port = process.env.PORT || 8080;

// Serve only the static files from the dist directory

// Replace the '/dist/<to_your_project_name>'

app.use(express.static(__dirname + '/dist/proplistings'));

app.get('*', function(req ,res){

    //Replace the '/dist/<to_your_project_name>/index.html'

    res.sendFile(path.join(__dirname + '/dist/proplistings/index.html'));

});

// Start the apply listening on the defalut heroku part

app.listen(Port, function(error,data
){
    if(error){
        console.log("Error in App "+error) ;
    }
    else{
        console.log("App started at Port ",Port)
    }

});