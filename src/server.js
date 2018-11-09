var app = require("express")();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/octoprint', (req, res) =>{
    res.redirect(301, "http://192.168.178.54");
})

app.get('/piHole', (req, res) =>{
    res.redirect(301, "http://192.168.178.63:8170/admin");
})

app.get('/door', (req, res) =>{
    res.redirect(301, "http://192.168.178.60:8170");
})

app.listen(80, () => {
    console.log('Example app listening on port 80!');
});