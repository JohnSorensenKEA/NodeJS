import express from "express";
const router = express.Router();

import { connection } from "../database/connectSqlite.js";

router.get("/games", async (req, res) => {
    //const dbConnection = await connectSqlite();

    const games = await connection.all(`SELECT * FROM games`);

    res.send(games);
});

router.post("/games", async (req, res) => {
    const gameToCreate = req.body;
    console.log(gameToCreate);

    //const dbConnection = await connectSqlite();

    const idk = await connection.run(`INSERT INTO games (title, genre, price) VALUES (?, ?, ?)`, [req.body.title, req.body.genre, req.body.price]); //Prepare statements

    res.send({});
});

export default router;