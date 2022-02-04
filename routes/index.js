const { response } = require('express');
const express = require('express');
const router = express.Router();
const axios = require('axios');

// router.get('/', async (req, res) => {
//   try {
//     const response = await axios.post(process.env.URL,
//       {"query":`mutation {\n signIn (apiKey: "${process.env.API_KEY}", password: "${process.env.PASSWORD}")\n {\n token\n }\n}`})
//       console.log(response.data.data.signIn.token);
//   } catch (error) {
//       console.log(error);
//   }
// });

const headers = {
  "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3OGU1NzMzNTdlZDAwMTU2NDhhNjIiLCJyb2xlIjoicHJhY3RpdGlvbmVyIiwiaWF0IjoxNjQ0MDA1OTkyLCJleHAiOjE2NDQwNDkxOTJ9.pGChFSWX9NhKcNbqbewuKgX7n1bfpGVBZQyE6LPQlmo"
};

const graphqlQuery = { query:
  `query patients {
    patients {
      data {
        firstName
      }
    }
  }`
}

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      url: process.env.URL,
      method: "post",
      headers: headers,
      data: graphqlQuery
    })
    console.log(response.data.data.patients.data)
  } catch (error) {
    console.log('error');
  }
});

module.exports = router;
