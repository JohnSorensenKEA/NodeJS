const router = require("express").Router();

const projects = [
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"] },
    { name: "Nodefolie", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"] },
    { name: "Adventure XP", category: "Java", technologies: ["Java", "Spring", "CSS", "JavaScript", "MySQL"] }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = { router };