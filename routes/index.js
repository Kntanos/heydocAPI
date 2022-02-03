const { response } = require('express');
const express = require('express');
const router = express.Router();
const axios = require('axios');

// router.get('/', async (req, res) => {
//   try {
//     const response = await axios.post(process.env.URL,
//       {"query":`mutation {\n signIn (apiKey: ${process.env.API_KEY}, password: ${process.env.PASSWORD})\n {\n token\n }\n}`})
//     console.log(response.data.data.signIn.token);
//   } catch (error) {
//     console.log(error);
//   }
// });

const headers = {
	// "content-type": "application/json",
  "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3OGU1NzMzNTdlZDAwMTU2NDhhNjIiLCJyb2xlIjoicHJhY3RpdGlvbmVyIiwiaWF0IjoxNjQzODk3MTIzLCJleHAiOjE2NDM5NDAzMjN9.Xb4kUd4QecvTBgpGFh2YkPcjMu-_C8kODzMlN9IP8c8"
};

const graphqlQuery = { query:
  `query contact($id: ID!) {
    contact(id: $id) {
      id
      title
      status
      firstName
      lastName
      fullName
      email
      medicalSpecialty
      company
      createdAt
      updatedAt
      }
    }`,
  variables: `{"id": 10}`
}

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      url: process.env.URL,
      method: "post",
      headers: headers,
      data: graphqlQuery
    })
    console.log(response.data)
  } catch (error) {
    console.log("error");
  }
});

module.exports = router;
