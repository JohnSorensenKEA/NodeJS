import express from "express";
const router = express.Router();

router.get("/visit", (req, res) => {
    req.session.isVisiting = true;
    res.send({ message: "Welcome" });
});

router.get("/isVisiting", (req, res) => {    
    res.send({ clientIsVisiting: req.session.isVisiting || false });
});

router.get("/leave", (req, res) => {
    //req.session.isVisiting = false;
    req.session.destroy();
    res.send({ message: "Goodbye" });
});

export default router;