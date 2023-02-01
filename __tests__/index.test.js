import { readFileSync } from 'fs';
import getPath from '../src/index';

test('get path', () => {
  expect(getPath('../__fixtures__/testFile1.json')).toEqual('something');
  expect(1 + 3).toEqual(4);
});
