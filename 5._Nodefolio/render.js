const fs = require("fs");

const nav = fs.readFileSync(__dirname + "/public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync(__dirname + "/public/components/footer/footer.html", "utf8");

function createPage(path, options = { title: "Nodefolio" }) {
    return (nav + fs.readFileSync(__dirname + `/public/pages/${path}`, "utf8") + footer)
    .replace("%%DOCUMENT_TITLE%%", options.title)
    .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "");
}

module.exports = {
    createPage
};