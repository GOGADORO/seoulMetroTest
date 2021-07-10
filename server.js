const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');
const app = express();

app.get('/',(req,res)=>{
res.status(200).set("Content-Type", "image/svg+xml").send(data)
	res.sendFile(__dirname + '/index.html')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;
app.listen(port, () =>{
	console.log("Upload Server running on 3001...");
});
