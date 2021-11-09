import express from "express";
const router = express.Router();

import { connectSqlite } from "../database/connectSqlite.js"

router.get("/games", async (req, res) => {
    const dbConnection = await connectSqlite();

    const games = await dbConnection.all(`SELECT * FROM games`);

    res.send(games);
});

router.post("/games", async (req, res) => {
    const gameToCreate = req.body;
    console.log(gameToCreate);

    const dbConnection = await connectSqlite();

    const idk = await dbConnection.run(`INSERT INTO games (title, genre, price) VALUES ('${req.body.title}', '${req.body.genre}', '${req.body.price}')`);

    res.send({});
});

export default router;