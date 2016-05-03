 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('./dist/index.html')
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){
     res.sendfile( __dirname + '/dist/'+ req.params[0]);
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
   console.log("If you change something, please run `gulp` again");
   console.log("This is ChangJoo Park's resume");
   console.log("If you cannot do great things, do small things in a great way. :)");
   console.log("http://localhost:5000");
 });
