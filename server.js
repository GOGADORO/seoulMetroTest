const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
const util = require('util');
require('util.promisify').shim();
const readFileAsync = util.promisify(fs.readFile);
var i64 = fs.readFileSync('./image.b64');
svg.append("image")
  .attr("y","0")
  .attr("x","0")
  .attr("xlink:xlink:href", "data:image/png;base64,"+i64) // /!\
  .attr("width", width)
  .attr("height", height)
  .attr("class", "bg-image");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

const port = process.env.PORT || 3001;
app.listen(port, () =>{
	console.log("Upload Server running on 3001...");
});
