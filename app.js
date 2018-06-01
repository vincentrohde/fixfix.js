const fs = require('fs');
let folder = process.argv[2];

// now only works with subdirectories
fs.readdir(__dirname + '/' + folder, function (err, items) {
  console.log(items);
});