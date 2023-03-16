import { readFileSync } from 'fs';

import * as path from 'path';

import filePath from './filePath.js';

import compareObjects from './compare.js';

const getPath = (filename) => path.resolve(process.cwd(), filename);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getFileFormat = (filename) => path.extname(filename).slice(1);

const parsPath = (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const data1 = filePath(readFile(path1), getFileFormat(filepath1));

  const path2 = getPath(filepath2);
  const data2 = filePath(readFile(path2), getFileFormat(filepath2));

  const diff = compareObjects(data1, data2);
  return diff;
};

export {
  getPath, readFile, getFileFormat, parsPath
};
