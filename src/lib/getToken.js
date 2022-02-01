url = 'https://open.heydoc.co.uk/graphql'
data = `{"query":"mutation {\n signIn (apiKey: ${process.env.API_KEY},
        password: ${process.env.ACCOUNT_PASSWORD})\n {\n token\n }\n}"}`

const getToken = async (url, data) => {
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  const token = response.json().data.signIn.token;
  console.log(token);
};

module.exports = getToken;