const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const pageURL = args[0];
const writeTo = args[1];

//use request to get the page
request(pageURL, (error, response, body) => {
  if (error || response.statusCode >= 300) {
    console.log('status: ', response.statusCode);
    console.log('error: ', error);
    process.exit(1);
  }
  fs.writeFile(writeTo, body, (err) => {
    if (err) {
      console.log('error: ', error);
      process.exit(1);
    }
      console.log(`Downloaded and saved ${body.length} bytes to '${writeTo}'`);
  });
});
