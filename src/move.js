/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const moveFile = (source, destination, withNewName = false) => {
  try {
    const content = fs.readFileSync(source);
    const filePath = withNewName
      ? destination
      : path.resolve(destination, path.basename(source));

    fs.writeFileSync(filePath, content);
    fs.rmSync(source);
  } catch (e) {
    console.log(e.message);
  }
};

exports.move = moveFile;
