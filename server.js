const express = require('express');
const app = express();
const { PythonShell } = require('python-shell')

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(3001, () => {
    console.log('listen to 3001')
    console.log(__dirname)
})
