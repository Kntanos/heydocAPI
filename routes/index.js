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
  "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3OGU1NzMzNTdlZDAwMTU2NDhhNjIiLCJyb2xlIjoicHJhY3RpdGlvbmVyIiwiaWF0IjoxNjQ0MDU4NjkxLCJleHAiOjE2NDQxMDE4OTF9.7x40U3ubMtdYOL6vKVAAcN5KDpnlbMCz3XiOXjb8CIQ"
};

// const graphqlQuery = { query:
//   `query patients {
//     patients {
//       data {
//         id
//       }
//     }
//   }`
// }

// const graphqlQuery = { query:
//   `query practice {
//     practice {
//       appointmentTypes {
//         title
//       }
//     }
//   }`
// }


// Pass variable directly in the query
// const graphqlQuery = { query:
//   `query patient {
//     patient(id: "61eafe28532a8000123109c3") {
//       firstName
//       lastName
//     }
//   }`
// }

// Pass variables separately in the query for dynamic variables
// const graphqlQuery = { query:
//   `query patient($id: ID!) {
//     patient(id: $id) {
//       firstName
//       lastName
//       bookings (start: "2021", end: "2022") {
//         id
//       }
//     }
//   }`,

//   variables: { id: "61eafe28532a8000123109c3" }
// };

// Can get list of booking id's from this, but only if I specify dateRange
// const graphqlQuery = { query:
//   `query bookings($dateRange: DateRange) {
//     bookings(dateRange: $dateRange) {
//       data {
//         id
//       }
//     }
//   }`,
//   variables: {dateRange: {start: "2021", end: "2022"}}
// };

const graphqlQuery = { query:
  `query bookings($dateRange: DateRange) {
    bookings(dateRange: $dateRange) {
      data {
        id
        start
        patient {
          id
        }
        appointment {
          title
        }
      }
    }
  }`,
  variables: {dateRange: {start: "2021", end: "2022"}}
};

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      url: process.env.URL,
      method: "post",
      headers: headers,
      data: graphqlQuery
    })
    console.log(response.data.data.bookings.data)
  } catch (error) {
    console.log('error');
  }
});

module.exports = router;
