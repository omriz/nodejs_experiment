//Lets require/import the HTTP module
var http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

// Main function
if (require.main === module) {
    //Create a server
    var server = http.createServer(handleRequest);
    
    //Lets start our server
    // Listening to the environment $PORT
    server.listen(process.env.PORT, function(){
        //Callback triggered when server is successfully listening. Hurray!
        console.log("Server listening on: http://localhost:%s", process.env.PORT);
    });
}