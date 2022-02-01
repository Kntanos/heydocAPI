const { response } = require('express');
const express = require('express');
const getData = require('../src/lib/getData');
const router = express.Router();
const getToken = require('../src/lib/getToken');
const getData = require('../src/lib/getData');
const calcWaitingTime = require('../src/lib/calcWaitingTime');

router.get('/', (req, res, next) => {
  const TOKEN_ID = getToken()
});

router.get('/data', (req, res, next) => {
  const data = await getData();
  calcWaitingTime(data);
});

module.exports = router;