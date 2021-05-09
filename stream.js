const fs = require('fs');

const readStream = fs.createReadStream('./doc/blog3.txt', { encoding: 'utf8'});

readStream.on('data', (chunk) => {
  console.log("----- NEW CHUNK-----");
  console.log(chunk);
});

