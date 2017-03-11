"use strict";
//Declaring imports.
const http = require('http');
const httpdispatcher = require('httpdispatcher');
const generatedPages = require('./source/generatedPages');

// Configuring the server routes.
function configureRoutes(dispatcher, router) {
    // Static folder configuration.
    dispatcher.setStatic('/static');
    dispatcher.setStaticDirname('static');
    dispatcher.onGet('/page1', router.pageOne);
    dispatcher.onGet('/page2', router.pageTwo);
}

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
    let router = new generatedPages.PageRouter();
    configureRoutes(dispatcher, router);

    //Lets start our server
    // Listening to the environment $PORT
    server.listen(process.env.PORT, function() {
        //Callback triggered when server is successfully listening. Hurray!
        console.log("Server listening on: http://localhost:%s", process.env.PORT);
    });
}
