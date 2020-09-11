// Import dependencies for server to run
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_Controller.js");

// Use port 8080 if no other port assigned by server
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// For POST and PUT
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give the server access to the routes.
app.use(routes);

// Start the server listening
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
