const fetch = require("node-fetch");

async function fetchData(url) {
  const response = await fetch(url, {
    // headers: {
    //   'Authorization': 'basic '+btoa('')
    // },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

module.exports = fetchData;
