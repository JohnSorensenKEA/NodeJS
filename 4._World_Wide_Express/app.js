const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    //res.sendFile("index.html", { root: __dirname });
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo.html");
});














app.listen(8080, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});