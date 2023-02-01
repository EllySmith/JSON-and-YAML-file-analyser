import compareObjects from '../src/compare';
import { getPath, readFile, getFileFormat, parsPath }  from '../src/index.js';

test('get path', () => {
  expect(getPath('file1.json')).toBe('/Users/ellysmith/hexlet-js/frontend-project-46/file1.json');
});

test('get file format', () => {
  expect(getFileFormat('__fixtures__/testFile1.json')).toBe('json');
});
