import { readFileSync } from 'fs';

import * as path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import applyFormat from './formatters/index.js';

import compareObjects from './compare.js';

import parseFile from './parsFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) => path.resolve(__dirname, '..', filename);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getFileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = getPath(filepath1);
  const data1 = parseFile(readFile(path1), getFileFormat(filepath1));
  const path2 = getPath(filepath2);
  const data2 = parseFile(readFile(path2), getFileFormat(filepath2));

  const resultString = compareObjects(data1, data2);
  return applyFormat(resultString, formatName);
};

export default genDiff;

export {
  getPath, readFile, getFileFormat, genDiff,
};
