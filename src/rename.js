/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const renameFile = (oldName, newName) => {
  try {
    fs.renameSync(oldName, newName);
  } catch (e) {
    console.log(e.message);
  }
};

exports.rename = renameFile;
