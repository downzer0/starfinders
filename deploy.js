const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const deploy = async () => {
  await ncp('./build', './');
  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, file) => {
    if (err) {
      console.error(err);
    }
    const newFile = file.replace(/\/static/gm, 'static');
    fs.unlink(path.resolve(__dirname, 'index.html'), (err) => {
      if (err) {
        console.error(err);
      }
      fs.writeFileSync(path.resolve(__dirname, 'index.html'), newFile);
      rimraf('./build', (err) => {
        if (err) {
          console.log(err);
        }
        console.log('Done');
      });
    });
  });
};

deploy();