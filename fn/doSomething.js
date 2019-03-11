const axios = require('axios')

// access env vars via the `process.env.XXXX` which is passed from the serverless.yml file
// this way is more secure and clean
const DEMO_ACCESS_KEY = process.env.DEMO_ACCESS_KEY
const headers = {
  headers: {
    Authorization: `Bearer ${DEMO_ACCESS_KEY}`
  }
}

module.exports = function(event, context, callback) {
  console.log('==============> DOING SOMETHING')
  const params = JSON.parse(event.body)

  const response = {
    statusCode: 200,
    body: {
      message: 'Successfully did something!'
    },
  };
  callback(null, response);
}
