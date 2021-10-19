//import fetch from "node-fetch";
const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

app.use(express.json());
app.use(express.static('public')); //Allows static file serving

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html");
    //res.sendFile("index.html", { root: __dirname });
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo/cleo.html");
});

// create new file called teenageroom.html
// serve /teenageroom
// use dynamic client-side redirection to redirect after 3 seconds

app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom.html");
});

app.get("/creditor", (req, res) => {
    res.send({ message: "You are indebted and you won't get what you want" });
});

/*
app.get("/sausage/:credit", (req, res) => {
    if (req.params.credit < 25) {
        res.redirect("/creditor");
    } else {
        res.send({ sausage: "Pølse snak" });
    }
});
*/

app.get("/sausage", (req, res) => {
    if (req.query.credit < 25) {
        res.redirect("/creditor");
    } else {
        res.send({ sausage: "Pølse snak" });
    }
});



/* 
assignment: Create an endpoint called /proxy
and fetch the google homepage and send it to the client as response 
*/

app.get("/proxy", (req, res) => {
    fetch('https://www.google.com')
    .then(response => response.text())
    .then(data => res.send(data));
});

app.get("/proxy2", async (req, res) => {
    const response = await fetch('https://www.google.com');
    const data = await response.text();

    res.send(data);
});



//console.log(process.env.PORT);

// Task allow the developer setting the port
// Task start-dev should run on port 8080

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
//^^Done