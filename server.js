// goes at very top of JS file
require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("The server is running");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
	// grabs info from .env file
	console.log(`Your password is ${process.env.SECRET_PASSWORD}`);
});
