import { readFileSync } from 'fs';

import * as path from 'path';

import filePath from './filePath.js';

import compareObjects from './compare.js';

const getPath = (filename) => path.resolve(process.cwd(), filename);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getFileFormat = (filename) => path.extname(filename).slice(1);

const parsPath = (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const data1 = JSON.parse(readFile(path1, 'utf8'));

  const path2 = getPath(filepath2);
  const data2 = JSON.parse(readFile(path2, 'utf8'));

  const resultString = compareObjects(data1, data2).toString();
  console.log(resultString);
  return resultString;
};

export {
  getPath, readFile, getFileFormat, parsPath,
};
