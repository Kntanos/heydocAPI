const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  // try getting data with existing token

  //catch (if token not valid) request new token, then get data
  url = 'https://open.heydoc.co.uk/graphql'
  data = `{"query":"mutation {\n signIn (apiKey: ${process.env.API_KEY}, password: ${process.env.ACCOUNT_PASSWORD})\n {\n token\n }\n}"}`

  const getToken = async (url, data) => {
    const response = await fetch (url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const token = response.json().data.signIn.token
    console.log(token);
  }
  next();
  return;
});

router.get('/', (req, res, next) => {
  url = 'https://open.heydoc.co.uk/graphql'
  
  const getToken = async (url) => {
    const response = await fetch (url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const waitingTime = response.json()
    console.log(waitingTime);
  }
});

module.exports = router;