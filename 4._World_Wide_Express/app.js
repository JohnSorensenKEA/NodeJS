const express = require("express");
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