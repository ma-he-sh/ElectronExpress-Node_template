var express = require("express"),
    $ = require("jquery"),
    app = express(),
    router = express.Router(),
    path = __dirname + "/views/"

app.set("view engine", "pug")
app.use(express.static("public"));

require('./app/routes.js')(app, router, path)

app.listen(process.env.PORT || 5555);
console.log("SERVER ON: 5555");