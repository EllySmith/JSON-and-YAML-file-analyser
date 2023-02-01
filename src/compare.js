import _ from 'lodash';

export default function compareObjects(obj1, obj2) {
  const linesFirstObject = Object.keys(obj1);
  const linesSecondObject = Object.keys(obj2);
  for (const key of linesFirstObject) {
    if (!linesSecondObject.includes(key)) {
      console.log(`- ${key}: ${obj1[key]}`);
    }
    if (linesSecondObject.includes(key) && Object.is(obj1[key], obj2[key])) {
      console.log(`  ${key}: ${obj1[key]}`);
    }
    if (linesSecondObject.includes(key) && !Object.is(obj1[key], obj2[key])) {
      console.log(`+ ${key}: ${obj1[key]}`);
      console.log(`+ ${key}: ${obj2[key]}`);
    }
  }
  for (const key of linesSecondObject) {
    if (!linesFirstObject.includes(key)) {
      console.log(`+ ${key}: ${obj2[key]}`);
    }
  }
}
