const ipp = require("ipp");
const multer = require('multer');
const fs  = require("fs");
const config = require("config")

const printer = ipp.Printer("http://"+config.printer+":631/ipp/printers", {version:'1.0'});
const upload = multer({ dest: 'cache/print/'});


module.exports.init = function (app){
    app.get('/print', (req, res) =>{
        res.sendFile(__dirname + '/index.html');
    })
    
    app.get('/print/info', (req, res)=>{
        printer.execute('Get-Printer-Attributes', null, function (err, data) {
            res.send(data);
        });
    })

    app.get('/print/jobs', (req, res)=>{
        printer.execute('Get-Jobs', null, function (err, data) {
            res.send(data);
        });
    })
    
    app.post('/print', upload.single('data'), function (req, res, next) {
        var doc = req.file;
        var buffer = Buffer.from(fs.readFileSync(doc.path, 'base64'));
        console.log(buffer.length);
        
        var file = {
            "operation-attributes-tag": {
                "requesting-user-name": "Server",
                "job-name": doc.originalname,
                "document-format": "application/octet-stream"
            }, 
            data: buffer
        };
    
        printer.execute("Print-Job", file, function (err, res) {
            console.log(err, res);
    
        });
        
        res.status(200).send();
        //fs.unlinkSync(doc.path);
      })
}