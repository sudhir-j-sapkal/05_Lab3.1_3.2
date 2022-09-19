'use strict'
const { Router } = require('express')
const router = Router()
const data = require('../data.js');
var returnData = '';


router.get('/', (req, res) => {
  data().then((result) => {
    res.send(`Response From Data: ${result}`)
  });
})

module.exports = router