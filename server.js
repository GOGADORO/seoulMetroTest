const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = http.createServer(function(req,res){
	res.setHeader('Content-Type','image/svg+xml')
})
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html')
})


const port = process.env.PORT || 3001;
app.listen(port, () =>{
	console.log("Upload Server running on 3001...");
});
