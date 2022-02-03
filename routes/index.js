const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.post(procees.env.URL, process.env.TOKEN_REQ)
    console.log(response.data.data.signIn.token);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;