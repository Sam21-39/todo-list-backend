const express = require('express');

const addToList = require('../controllers/addList')

const router = express();

module.exports = router.post('/addToList', addToList);