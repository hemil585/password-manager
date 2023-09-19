const InfoController = require('../controllers/Info')
const express = require('express')
const router = express.Router()


router
    .post('/info/:id',InfoController.addInfo)
    .get('/info/:id',InfoController.getInfo)

module.exports = router