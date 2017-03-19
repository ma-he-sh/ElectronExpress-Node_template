var express = require("express");
var $ = require("jquery");
var app = express();
var router = express.Router();
var path = __dirname + "/views/";
app.set("view engine", "pug");

app.use(express.static("public"));

router.use(function(req, res, next){
	console.log("/"+req.method);
});

app.get("/", function(req, res){
	res.render("index", {
		title: "app_test"
	});
});

app.use("/", router);

app.use("/", function(req, res){
	res.sendFile(path + "404.html");
});

app.listen(process.env.PORT || 5555);
console.log("SERVER ON: 5555");