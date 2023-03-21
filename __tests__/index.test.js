import { readFileSync } from 'fs';

import * as path from 'path';

import { fileURLToPath } from 'url';

import {
  getPath, getFileFormat, genDiff,
} from '../src/index.js';

const dirname = fileURLToPath(import.meta.url);

const getFixturePath = (filename) => path.join(dirname, '..', '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('get path', () => {
  expect(getPath('testfile1.json')).toBe(getFixturePath('file1.json'));
});

test('get file format', () => {
  expect(getFileFormat('file1.json')).toBe('json');
});

test('compare json files', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('stylishresult.txt');
  expect(genDiff(fileOne, fileTwo)).toBe(result);
});

test('compare yaml files', () => {
  const fileOne = getFixturePath('file1.yaml');
  const fileTwo = getFixturePath('file2.yaml');
  const result = readFile('yamlstylishresult.txt');
  expect(genDiff(fileOne, fileTwo)).toBe(result);
});

test('compare in plain format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('plainresult.txt');
  expect(genDiff(fileOne, fileTwo, 'plain')).toBe(result);
});

test('compare in json format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('jsonresult.txt');
  expect(genDiff(fileOne, fileTwo, 'json')).toBe(result);
});

test('compare in stylish format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('stylishresult.txt');
  expect(genDiff(fileOne, fileTwo, 'stylish')).toBe(result);
});
