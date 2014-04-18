var http = require("http");
var fs = require("fs");

var app = http.createServer(function(req, res) {
    var path = req.url;
    if(path == "/") path = "html/index.html";
    fs.readFile(__dirname + "/public/" + path, function(err, data) {
        if(err) {
            res.writeHead(500);
            res.end("Error loading: " + path); 
        }
        console.log("loaded path: " + path);
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.end(data);
    });
});

app.listen(process.env.PORT || 3000, function() { console.log("listening on " + (process.env.PORT || 3000))});