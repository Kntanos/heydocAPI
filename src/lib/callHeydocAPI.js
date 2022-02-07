const axios = require('axios');

const callHeydocAPI = async (req, res) => {
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
        "x-token": `${req.token}`
      },
      data: graphqlQuery
    })

    return response.data.data.patients.data

  } catch (error) {
    console.log(error);
  }
}

module.exports = callHeydocAPI;