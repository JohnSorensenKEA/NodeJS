import express from "express";
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import sauceRouter from "./routers/sauce.js";
import gamesRouter from "./routers/games.js";

app.use(sauceRouter);
app.use(gamesRouter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Running on port:", PORT);
});