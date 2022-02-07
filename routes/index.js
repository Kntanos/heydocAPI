const express = require('express');
const calculateWaitingTime = require('../src/lib/calculateWaitingTime');
const callHeydocAPI = require('../src/lib/callHeydocAPI');
const router = express.Router();
const getToken = require('../src/lib/getToken');

router.get('/', getToken, async (req, res) => {
  const data = await callHeydocAPI(req, res);
  const avgTime = calculateWaitingTime(data)
  res.send({ time: avgTime })
});

module.exports = router;
