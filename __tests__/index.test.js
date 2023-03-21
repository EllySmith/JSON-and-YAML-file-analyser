import * as path from 'path';

import {
  getPath, readFile, getFileFormat, genDiff,
} from '../src/index.js';

const getFixturePath = (filename) => path.join(process.cwd(), '__fixtures__', filename);

test('get path', () => {
  expect(getPath('testfile1.json')).toBe('/Users/ellysmith/hexlet-js/frontend-project-46/testfile1.json');
});

test('get file format', () => {
  expect(getFileFormat('__fixtures__/file1.json')).toBe('json');
});

test('compare json files', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/stylishresult.txt');
  expect(genDiff(fileOne, fileTwo)).toBe(result);
});

test('compare yaml files', () => {
  const fileOne = getFixturePath('file1.yaml');
  const fileTwo = getFixturePath('file2.yaml');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/yamlstylishresult.txt');
  expect(genDiff(fileOne, fileTwo)).toBe(result);
});

test('compare in plain format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/plainresult.txt');
  expect(genDiff(fileOne, fileTwo, 'plain')).toBe(result);
});

test('compare in json format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/jsonresult.txt');
  expect(genDiff(fileOne, fileTwo, 'json')).toBe(result);
});

test('compare in stylish format', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/stylishresult.txt');
  expect(genDiff(fileOne, fileTwo, 'stylish')).toBe(result);
});
