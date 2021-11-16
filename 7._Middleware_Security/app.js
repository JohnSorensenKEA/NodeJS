import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import _ from "./encryption.js";

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //False bc. http
}));

import rateLimit from "express-rate-limit";
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 //Ok for DOS
});
app.use(rateLimiter);

const authRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 6
});
app.use("/auth", authRateLimiter);

/* #Router setup */
import sessionRouter from "./routers/session.js";
app.use(sessionRouter);


app.get("/auth/login", (req, res) => {
    res.send("<h2>You are trying to login</h2>");
});

const ipLogger = (req, res, next) => {
    //res.send({ yourIp: req.ip }); //GDPR: Don't
    console.log(req.ip); //No send, fixed with next
    next(); //Uses next to send to next defined app.get, that matches '/findme'
};

//Global enabling of middleware
//app.use(ipLogger);

//app.use("/findeme", ipLogger); //Middleware. Overrides v before loaded before

function isAuthorized(req, res, next) {
    const userIsAuthorized = true;
    req.customUserData = "Jens";
    if (!userIsAuthorized) {
        return res.status(403).send({ message: "You are not authorized" });
    }
    next();
}

app.get("/honeypot", ipLogger, (req, res) => {
    res.send({ message: "Everything went well" });
});

app.get("/secretcache", isAuthorized, (req, res) => {
    res.send({ message: "You found it." });
});

app.get("/findme", (req, res) => {
    res.send({ message: "Did you find me?" }); //This
});

app.get("/findme", (req, res) => {
    res.send({ message: "Or did you fin me?" }); //Not this
});

// 2xx - Success
// 4xx - Client errors
// 5xx - Server errors
// Worth mentioning: 401 (Unauthorized) 403 (forbidden)

app.get("*", (req, res) => { //Pattern, if no other match. Error page
    res.status(404).send("<h1>You found nothing.</h1>"); //Chaining status
});

app.listen(8080);