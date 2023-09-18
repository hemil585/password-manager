const InfoController = require('../controllers/Info')
const express = require('express')
const router = express.Router()


router
    .post('/info',InfoController.addInfo)

module.exports = router