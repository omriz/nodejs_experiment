"use strict";
//Declaring imports.
const http = require('http');
const httpdispatcher = require('httpdispatcher');
const generatedPages = require('./source/generatedPages');

// Main function
if (require.main === module) {
    //Create a server
    let dispatcher = new httpdispatcher();
    // Inline function to use the local dispatcher.
    let server = http.createServer(function(request, response) {
        try {
            //log the request on console
            console.log(request.url);
            //Disptach
            dispatcher.dispatch(request, response);
        }
        catch (err) {
            console.log(err);
        }
    });

    // Setting the routing for the dispatcher.
    generatedPages.configureDispatcher(dispatcher);

    //Lets start our server
    // Listening to the environment $PORT
    server.listen(process.env.PORT, function() {
        //Callback triggered when server is successfully listening. Hurray!
        console.log("Server listening on: http://localhost:%s", process.env.PORT);
    });
}
