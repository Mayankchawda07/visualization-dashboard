const express = require('express');
const { getData } = require('./controller')
const visualRoute = express.Router();

visualRoute.get('/getData', getData);

module.exports = visualRoute;