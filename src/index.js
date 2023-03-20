import { readFileSync } from 'fs';

import formatStylish from './formatters/stylishFormat.js';

import applyFormat from './formatters/index.js';

import * as path from 'path';

import yaml from 'js-yaml';

import compareObjects from './compare.js';

import parseFile from './filePath.js';

const getPath = (filename) => path.resolve(process.cwd(), filename);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getFileFormat = (filename) => path.extname(filename).slice(1);

const parsPath = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = getPath(filepath1);

  const data1 = parseFile(readFile(path1), getFileFormat(filepath1));
  const path2 = getPath(filepath2);
  const data2 = parseFile(readFile(path2), getFileFormat(filepath2));
  
  const resultString = compareObjects(data1, data2);
  const formattedResult = applyFormat(resultString, formatName);
  return formattedResult;
};

export default parsPath;

export {
  getPath, readFile, getFileFormat, parsPath,
};
