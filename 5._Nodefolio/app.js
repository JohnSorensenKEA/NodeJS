/* Setting Express */
const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Page render function */
const { createPage } = require("./render.js");

/* Router import and use */
const projectsRouter = require("./routers/projects.js");
const pageRouter = require("./routers/pageRouter.js");
const contactRouter = require("./routers/contact.js");

app.use(projectsRouter.router);
app.use(pageRouter.router);
app.use(contactRouter.router);

/* Read the HTML files */
//const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
//const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

//const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html", "utf8");
//const projects = fs.readFileSync("./public/pages/projects/projects.html", "utf8");
//const contacts = fs.readFileSync("./public/pages/contacts/contacts.html", "utf-8");

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome",
    scriptTag: `<script>

    </script>`
 });
const projectsPage = createPage("projects/projects.html");
const contactsPage = createPage("contacts/contacts.html");
const CVPage = createPage("CVPage/CVPage.html");

/* Site endpoints */
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contacts", (req, res) => {
    res.send(contactsPage);
});

app.get("/cv", (req, res) => {
    res.send(CVPage);
});


/* Server port setting */
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});