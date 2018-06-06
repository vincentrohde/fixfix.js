const fs = require('fs');

let fixfix = (function() {

  return {
    fix: function(src, division, fix) {
      fs.readdir(src, (err, items) => {
    
        items.forEach((item) => {
          const original = item;
          let newFilename = '';
    
          // remove/ safe extension name from filename
          let parts = item.split('.');
          const extension = parts[parts.length - 1];
          parts.pop();
    
          parts.forEach((item) => {
            let parts = item.split(division);
            // remove prefix/ suffix
            if(fix == 'prefix') {
              parts.shift();
            } else {
              parts.pop();
            }
            // put file parts back together
            newFilename = parts.join(division);
          });
    
          let myfilename = newFilename + '.' + extension;
          // renames file to new name
          fs.rename(src + '/' + original, src + '/' + myfilename, (err) => {
            if(err) {
              console.log(err);
            }
          });

        });
      });
    }
  }
})();

module.exports = fixfix;