const axios = require('axios');

const getToken = async (req, res, next) => {

  try {
  const response = await axios.post(process.env.URL,
    {"query":`mutation {
      signIn (apiKey: "${process.env.API_KEY}", password: "${process.env.PASSWORD}")
      {
        token
      }
    }`
  })
    
    req.token = response.data.data.signIn.token
    next();

  } catch (error) {
    console.log(error);
  }
}

module.exports = getToken;