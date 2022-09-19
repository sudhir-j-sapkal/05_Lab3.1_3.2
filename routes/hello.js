'use strict'
const { Router } = require('express')
const router = Router()


router.post('/getdata', (req, res) => {
    console.log('Inside Get Data');
    res.send({ userId: 100, userName : "Sudhir"})
})

module.exports = router