  const getData = async (url) => {
    url = process.env.URL

    const response = await fetch (url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      "x-token": process.env.TOKEN_ID,
      body: JSON.stringify(data)
    });
    data = response.json()
    console.log(data);
  }

  module.exports = getData;