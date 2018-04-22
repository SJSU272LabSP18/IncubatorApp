
/**

project-team-16

**/




var fs = require('fs');
var express = require('express');
var Client = require('node-rest-client').Client;

var app = express();
app.use(express.bodyParser());

var page = function( req, res, state ) {
    var body = fs.readFileSync('./gumball.html');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);

    
}




    
app.set('port', (process.env.PORT || 8080));

app.post("*", handle_post );
app.get( "*", handle_get ) ;

console.log( "Server running on Port 8080..." ) ;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


