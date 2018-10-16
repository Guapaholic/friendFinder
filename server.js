var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);
