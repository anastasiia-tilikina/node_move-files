/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const isExistingDir = (source) => {
  if (!fs.existsSync(source)) {
    return false;
  }

  return fs.statSync(source).isDirectory();
};

exports.isExistingDir = isExistingDir;
