const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


// API Hello World
app.get("/", (req, res) => {

    res.json({
        message: "Hello World"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});