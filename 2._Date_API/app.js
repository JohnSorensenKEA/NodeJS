const express = require("express");
const app = express();

//Flyttet ud fra scope
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //US js: starter med sunday

app.get("/getDay", (req,res) => {
    const date = new Date();
    /*res.send(
        {
        day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
        }
    ); */

    res.send(
        {
            day: days[date.getDate()]
        }
    );
});

app.get("/getTime", (req, res) => {
    res.send(
        {

        }
    );
});


app.listen(8080);