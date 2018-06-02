const fs = require('fs');
const folder = process.argv[2];
const src = __dirname + '/' + folder;

// now only works with subdirectories
fs.readdir(src, (err, items) => {

  items.forEach((item) => {
    const original = item;
    let newFilename = '';

    // remove/ safe extension name from filename
    let parts = item.split('.');
    const extension = parts[parts.length - 1];
    parts.pop();

    parts.forEach((item) => {
      let parts = item.split('_');
      // remove prefix
      parts.shift();
      // put file parts back together
      newFilename = parts.join('_');
    });

    newFilename += '.' + extension;
    // renames file to new name
    fs.rename(src + '/' + original, src + '/' + newFilename, (err) => {
      if(err) {
        console.log(err);
      }
    });
  });
});