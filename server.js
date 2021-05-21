// Load the express module and store it in the variable express (Where do you thin this come from)
var express = require("express");

var app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// app.use(express.static("static"));

// use app.get method and pass it the base route '/' and a callback
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/static/view/index.html");
});

app.get("/cars", function (req, res) {
	res.sendFile(__dirname + "/static/view/cars.html");
});

app.get("/cats", function (req, res) {
	res.sendFile(__dirname + "/static/view/cats.html");
});

app.get("/cars/new", function (req, res) {
	res.sendFile(__dirname + "/static/view/form.html");
});

// // error 404
// app.use((req, res, next) => {
// 	res.status(404).send("Sorry can't find that!");
// 	res.send("<h1> Page not found </h1>");
// });

// app.get("/users", function (req, res) {
// 	// hard-coded user data
// 	var users_array = [
// 		{ name: "Michael", email: "michael@codingdojo.com" },
// 		{ name: "Jay", email: "jay@codingdojo.com" },
// 		{ name: "Brendan", email: "brendan@codingdojo.com" },
// 		{ name: "Andrew", email: "andrew@codingdojo.com" },
// 	];
// 	res.render("users", { users: users_array });
// });

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
	console.log("server is listening to 8000");
});
