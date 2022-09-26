const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var compression = require('compression')

// const { contactUs } = require("./controller.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static('./static'));
app.use(compression());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about.html", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/ai.html", (req, res) => {
    res.sendFile(__dirname + "/ai.html");
});

app.get("/blockchain.html", (req, res) => {
    res.sendFile(__dirname + "/blockchain.html");
});

app.get("/digital-marketing.html", (req, res) => {
    res.sendFile(__dirname + "/digital-marketing.html");
});

app.get("/web.html", (req, res) => {
    res.sendFile(__dirname + "/web.html");
});

app.get("/erm.html", (req, res) => {
    res.sendFile(__dirname + "/erm.html");
});

app.get("/robotic.html", (req, res) => {
    res.sendFile(__dirname + "/robotic.html");
});

app.get("/policy.html", (req, res) => {
    res.sendFile(__dirname + "/policy.html");
});
app.get("/contact.html", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});
app.get("/market-research.html", (req, res) => {
    res.sendFile(__dirname + "/robotic.html");
});
app.get("/contact-form.html", (req, res) => {
    res.sendFile(__dirname + "/contact-form.html");
});


// app.post('/', contactUs);

const PORT = process.env.PORT || 8080;
const host = '0.0.0.0';
app.listen(PORT, host, () => {
    console.log(`Server is running on port ${PORT}.`);
});