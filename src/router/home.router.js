const home = require('../app/controller/items.controller');
const express = require('express');
const router = express.Router();

router.get('/', home.home);

module.exports = router;