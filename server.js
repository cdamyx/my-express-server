//jshint exversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
	res.send("Hello");
});

app.get("/contact", function(req, res){
	res.send("contact me at test@gmail.com");
});

app.get("/about", function(req, res){
	res.send("<p>I like long walks on the beach, I'm a gemini, people scare me</p>");
});

app.get("/hobbies", function(req, res){
	res.send("<ul><li>coffee</li><li>code</li><li>beer</li></ul>")
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});