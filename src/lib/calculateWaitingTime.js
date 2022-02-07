const calculateWaitingTime = (apiData) => {
  const dates = {};
  const timeDiff = [];

  apiData.forEach(entry => entry.bookings.length > 1 && (dates[entry.bookings[0].start] = entry.bookings[1].start));

  for (const [key, value] of Object.entries(dates)) {
    timeDiff.push(Date.parse(value) - Date.parse(key));
  }

  const avgtimeDiff = timeDiff.reduce((a, b) => (a + b), 0) / timeDiff.length

  const avgWaitingTime = Math.floor(avgtimeDiff/(1000*60*60*24*7)) //in weeks
  
  return avgWaitingTime
}

module.exports = calculateWaitingTime