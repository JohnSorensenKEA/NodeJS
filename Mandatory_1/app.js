const express = require('express');
const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index/index.html");
});

//#Theory
app.get("/js-datatypes", (req, res) => {
    res.sendFile(__dirname + "/public/theory/js-datatypes.html");
});

app.get("/node-js", (req, res) => {
    res.sendFile(__dirname + "/public/theory/node-js.html");
});

app.get("/variable-declaration", (req, res) => {
    res.sendFile(__dirname + "/public/theory/variable-dec.html");
});

app.get("/js-functions", (req, res) => {
    res.sendFile(__dirname + "/public/theory/js-functions.html");
});

app.get("/package-json", (req, res) => {
    res.sendFile(__dirname + "/public/theory/package-json.html");
});

app.get("/npm-packages", (req, res) => {
    res.sendFile(__dirname + "/public/theory/npm-packages.html");
});

app.get("/rest-api", (req, res) => {
    res.sendFile(__dirname + "/public/theory/rest-api.html");
});

app.get("/js-loops", (req, res) => {
    res.sendFile(__dirname + "/public/theory/js-loops.html");
});

app.get("/body-parsing-&-postman", (req, res) => {
    res.sendFile(__dirname + "/public/theory/body-postman.html");
});

app.get("/crud-api", (req, res) => {
    res.sendFile(__dirname + "/public/theory/crud-api.html");
});

app.get("/file-serving", (req, res) => {
    res.sendFile(__dirname + "/public/theory/file-serving.html");
});

//#Tools
app.get("/vscode", (req, res) => {
    res.sendFile(__dirname + "/public/tools/vscode.html");
});

app.get("/node", (req, res) => {
    res.sendFile(__dirname + "/public/tools/node.html");
});

app.get("/git", (req, res) => {
    res.sendFile(__dirname + "/public/tools/git.html");
});

app.get("/nodemon", (req, res) => {
    res.sendFile(__dirname + "/public/tools/nodemon.html");
});

app.get("/postman", (req, res) => {
    res.sendFile(__dirname + "/public/tools/postman.html");
});

app.get("/npm", (req, res) => {
    res.sendFile(__dirname + "/public/tools/npm.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});