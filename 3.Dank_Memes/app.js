const express = require("express");
const app = express();

app.use(express.json());

let dankMemes = [{
    id: 1,
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}];

app.get("/getAllDankMemes", (req, res) => {
    res.send({
        memes: dankMemes
    });
});

app.get("/getDankMeme/:id", (req, res) => {
    //res.send({meme: dankMemes[Number (id)]});

    const foundMeme = dankMemes.find(dankMeme => dankMeme.id === Number (req.params.id));
    foundMeme ? res.send(foundMeme) : res.sendStatus(404);
});

let AUTO_INCREMENTER = dankMemes[dankMemes.length - 1].id;

app.post("/dankmemes", (req, res) => {
    const dankMeme = req.body;
    dankMeme.id = ++AUTO_INCREMENTER;
    dankMemes.push(dankMeme);
    res.send(req.body);
    console.log(dankMemes);
});

app.patch("/dankMemes/:id", (req, res) => {
    let memeToUpdate;
    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.id === Number(req.params.id)) {
            dankMeme = { ...dankMeme, ...req.body, id: dankMeme.id }
            return memeToUpdate;
        }
        return dankMeme;
    });

    memeToUpdate ? res.sendStatus(200) : res.sendStatus(404);
});

app.delete("/dankMemes/:id", (req, res) => {
    /*
    const id = req.params.id;

    dankMemes.splice(
        dankMemes.indexOf(
            dankMemes.filter(dankMeme => dankMeme.id === id
    )), 1);

    console.log(dankMemes);
    */

    let foundMemeToDelete = false;
    dankMemes = dankMemes.filter(dankMeme => {
        const notToDelete = dankMeme.id !== Number(req.params.id);
        if (!notToDelete) foundMemeToDelete = true;
        return notToDelete;
    });

    foundMemeToDelete ? res.sendStatus(200) : res.sendStatus(404);

    console.log(dankMemes);
});

app.listen(8080, (error) => {
    if (error) {
        console.log("error is:", error);
    }
    console.log("The server is running on port:", 8080);
});