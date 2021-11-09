import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connectSqlite() {
    return await open({
        filename: "./games.db",
        driver: sqlite3.Database
    });
}