const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

app.use(express.static("public"));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the form page
app.get("/", (req, res) => {
  res.render("index");
});
// Handle form submission
app.post("/submit", (req, res) => {
    const formData = {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address
    };

    res.render("result", formData); // Pass form data to result.ejs
});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
