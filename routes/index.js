const { response } = require('express');
const express = require('express');
const callHeydocAPI = require('../src/lib/callHeydocAPI');
const router = express.Router();
const getToken = require('../src/lib/getToken');

router.get('/', getToken, async (req, res) => {

  const data = await callHeydocAPI(req, res);
  res.send(data)
});

module.exports = router;
