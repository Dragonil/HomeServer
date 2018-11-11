const express = require("express");
const path = require("path");
const printerServie = require("./www/service/Printer/endpoint");
const config = require("config");
const app = express();
const port = config.port || 3000;

app.use('/assets', express.static(__dirname + '/www/assets'));

// Init Services
printerServie.init(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/octoprint', (req, res) =>{
    res.redirect(301, "http://"+config.octoprint);
})

app.get('/piHole', (req, res) =>{
    res.redirect(301, "http://"+config.pihole+"/admin");
})

app.get('/door', (req, res) =>{
    res.redirect(301, "http://"+config.door);
})


app.listen(port, () => {
    console.log('Example app listening on port '+port+'!');
});