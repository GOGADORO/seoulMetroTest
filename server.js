const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
const util = require('util');
require('util.promisify').shim();
const readFileAsync = util.promisify(fs.readFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

const port = process.env.PORT || 3001;
app.listen(port, () =>{
	console.log("Upload Server running on 3001...");
});
