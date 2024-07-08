const express = require('express')
const app = express();
const dbconnect = require('./connection/conn')
dbconnect();
const visualRoute = require('./Route')
const cors = require("cors");


app.use('/api/v1/visual', visualRoute)

app.use(cors());
app.use(cors({ origin: "*" }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});




app.listen(4040, () => {
    console.log("server created")
})