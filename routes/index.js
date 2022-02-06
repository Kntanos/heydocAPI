const { response } = require('express');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {

  const callAPI = async (token) => {
    const graphqlQuery = { query:
      `query patients {
        patients{
          data {
            id
            bookings(start: "2021", end: "2023") {
              start
              appointment {
                title
              }
            }
          }
        }
      }`
    };

    try {
      const response = await axios({
        url: process.env.URL,
        method: "post",
        headers: {
          "x-token": `${token}`
        },
        data: graphqlQuery
      })
      console.log(response.data.data.patients.data)
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const response = await axios.post(process.env.URL,
      {"query":`mutation {
        signIn (apiKey: "${process.env.API_KEY}", password: "${process.env.PASSWORD}")
        {
          token
        }
      }`
    })
      
      callAPI(response.data.data.signIn.token);

  } catch (error) {
      console.log(error);
  }
});

module.exports = router;
