var http = require('http');
var fs = require('fs');

var server = http.createServer(
    function (req, res)
    {
        var fileStream = fs.createReadStream(process.argv[3]);
        fileStream.pipe(res);
    }
);

server.listen(process.argv[2]);
*/

/* learnyounode HTTP UPPERCASERER
var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.method != "POST") res.end('I respond to POST only');

    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body+=chunk;
    })

    req.on('end', function(){
        res.end(body.toUpperCase());
    })

});
server.listen(process.argv[2]);
