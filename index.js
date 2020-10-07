var express = require('express')
var app = express()

const helloRoute = require('./hello');
const worldRoute = require("./world");

app.use("/hello",helloRoute)
app.use("/world",worldRoute)







const port = 3000



  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })