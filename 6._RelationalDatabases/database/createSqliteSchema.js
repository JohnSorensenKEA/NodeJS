import { connectSqlite } from "./connectSqlite.js";

(async () => {
    const dbConnection = await connectSqlite();

    await dbConnection.exec("DROP TABLE IF EXISTS games");

    const gamesTableSchema = `
        CREATE TABLE games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            genre TEXT,
            price DOUBLE
        )
    `;
    
    await dbConnection.exec(gamesTableSchema);
})();