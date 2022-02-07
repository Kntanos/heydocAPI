# Average Waiting Time Calculator from Heydoc API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

The code calls the Heydoc GraphQl API and retrieves patients' appoitnemnts for first consultation and date of operation.
It then calculates the average waiting time in weeks from first appoitnment to operation.
The intention is to ultimately use the code to display the average waiting time on the surgeon's website.

Run `DEBUG=heydoc:* npm start` to start the server

Visit `http://localhost300` to see the return value for the average waiting time in weeks.