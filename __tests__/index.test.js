import compareObjects from '../src/compare';
import { testFile1, testFile2 } from '../__fixtures__';

test('compareObjects', () => {
  expect(compareObjects(testFile1.json, testFile2.json)).toEqual('something');
});
