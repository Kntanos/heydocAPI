const calculateWaitingTime = require('../lib/calculateWaitingTime')

describe('#calculateWaitingTime', () => {
  it('returns the avg time from the API data', () => {
    const apiData = [
      {
        id: "61eafe28532a8000123109c3",
        bookings: [
          {
            start: "2022-02-17T18:00:00.000Z",
            appointment: {
            title: "Virtual Consultation"
            }
          }
        ]
      },
      {
        id: "6137d160117abf0012bda3f3",
          bookings: [
          {
            start: "2021-10-04T17:00:00.000Z",
            appointment: {
            title: "Bilateral mastectomies and chest wall reconstruction "
            }
          }
        ]
      },
      {
        id: "61eb00fcfc2f7500122c11ca",
        bookings: [ ]
      },
      {
        id: "615c26fe4661f90015d2c4d8",
        bookings: [
          {
            start: "2021-10-14T18:00:00.000Z",
            appointment: {
            title: "Consultation "
          }
          },
          {
            start: "2022-04-02T12:30:00.000Z",
            appointment: {
            title: "Bilateral mastectomies and chest wall reconstruction "
          }
          }
        ]
      },
      {
        id: "615c26fe4661f90015d2c4d8",
        bookings: [
          {
            start: "2021-09-14T18:00:00.000Z",
            appointment: {
            title: "Consultation "
          }
          },
          {
            start: "2022-05-02T12:30:00.000Z",
            appointment: {
            title: "Bilateral mastectomies and chest wall reconstruction "
          }
          }
        ]
      },
      {
        id: "615c26fe4661f90015d2c4d8",
        bookings: [
          {
            start: "2021-04-14T18:00:00.000Z",
            appointment: {
            title: "Consultation "
          }
          },
          {
            start: "2022-01-02T12:30:00.000Z",
            appointment: {
            title: "Bilateral mastectomies and chest wall reconstruction "
          }
          }
        ]
      }
    ]

    expect(calculateWaitingTime(apiData)).toEqual(31)
  })
})