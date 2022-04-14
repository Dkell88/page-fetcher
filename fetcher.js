
console.log(`\n\n\n**************************************************`);



const URL = process.argv[2];
const localPath = process.argv[3];

const request = require('request');
const fs = require('fs');

console.log(`URL: ${URL} - ${typeof(URL)}  localPath: ${localPath} - ${typeof(localPath)}`);

console.log('request');
request(URL, (error, response, body) => {

  if (error) {
    console.error(error);
    return;
  }
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.error("File created ... I think");
    console.error(`File size: ${body.length}bytes`);
  });

});

