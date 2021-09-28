const express = require("express"); //Node syntax, module import. 
const app = express(); //Skal instatieres
//const app = require("express")(); //Kortere, skal måske bruge andet fra lib, senere. Rart med express i toppen
app.use(express.json());

const cake = require("./cake.json");
console.log(cake);

app.get("/", (req, res) => {
    res.send({name: "Bob", age: 21, wierd: true});
});

// create a new route on the endpoint "/adventureTime"
// send back data (data type most be json)

app.get("/adventureTime", (req, res) => {
    res.send(
        {
        title: "Adventure Time", 
        ageLimit: 7, 
        origin: "USA"
        }
    );
});

//Endpoints er case insensitive, configurerbar

// given the existing query string
// ...&svar=[value]&...
// send 'svar' and its value back = respond with
app.get("/senddata", (req, res) => {
    res.send({svar: req.query.svar});
});

// create a route on favoriteNumber that throgh
// request parameter gets number and sends it back to the client
// bonus: tells the client if it's a nice number or not

app.get("/favoriteNumber/:number", (req, res) => {
    let answer = {
            number: req.params.number,
            //nice: false
            nice: req.params.number == 69// || req.params.number == 420
    };

    /*
    if (req.params.number == 69) {
        answer.nice = true;
    }
    */
    res.send(answer);
});

// create a route on /frontpage that sends back a welcome message

app.get("/frontpage", (req, res) => {
    res.send(
        {message: "Welcome"}
    );
});


app.post("/messages", (req, res) => {
    console.log(req.body);

    res.send({
        request: req.body
    });
});



app.listen(8080); // Rart i bunden


