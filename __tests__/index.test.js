import compareObjects from '../src/compare';
import {
  getPath, readFile, getFileFormat, parsPath,
} from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('get path', () => {
  expect(getPath('testfile1.json')).toBe('/Users/ellysmith/hexlet-js/frontend-project-46/file1.json');
});

test('get file format', () => {
  expect(getFileFormat('__fixtures__/testfile1.json')).toBe('json');
});

test('compare json files', () => {
  const fileOne = getFixturePath('testfile1.json');
  const fileTwo = getFixturePath('testfile2.json');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/result.txt');
  expect(parsPath(fileOne, fileTwo)).toBe(result);
});

test('compare yaml files', () => {
  const fileOne = getFixturePath('testfile1.yaml');
  const fileTwo = getFixturePath('testfile2.yaml');
  const result = readFile('/Users/ellysmith/hexlet-js/frontend-project-46/__fixtures__/result.txt');
  expect(parsPath(fileOne, fileTwo)).toBe(result);
});