const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log("출력출력");
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log("server start port: 3000")
})