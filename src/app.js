/* eslint-disable no-console */
'use strict';

const path = require('path');
const { rename } = require('./rename');
const { move } = require('./move');
const { isExistingDir } = require('./isExistingDir');

const moveFile = () => {
  const [src, dest] = process.argv.slice(2);

  if (!(path.dirname(src) === path.dirname(dest))) {
    move(src, dest, dest[dest.length - 1] !== '/');

    return;
  }

  if (isExistingDir(dest)) {
    move(src, dest);
  } else {
    rename(src, dest);
  }
};

moveFile();
