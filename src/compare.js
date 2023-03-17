import _ from 'lodash';

export default function compareObjects(obj1, obj2) {
  const linesFirstObject = Object.keys(obj1).sort();
  const linesSecondObject = Object.keys(obj2).sort();
  let resultString = '';
  for (const key of linesFirstObject) {
    if (!linesSecondObject.includes(key)) {
      resultString = `${resultString}`+`- ${key}: ${obj1[key]}\n`;
    }
    if (linesSecondObject.includes(key) && Object.is(obj1[key], obj2[key])) {
      resultString = `${resultString}`+`  ${key}: ${obj1[key]}\n`;
    }
    if (linesSecondObject.includes(key) && !Object.is(obj1[key], obj2[key])) {
      resultString = `${resultString}`+`  ${key}: ${obj1[key]}\n`;
      resultString = `${resultString}`+`+ ${key}: ${obj2[key]}\n`;
    }
  }
  for (const key of linesSecondObject) {
    if (!linesFirstObject.includes(key)) {
      resultString = `${resultString}`+`+ ${key}: ${obj2[key]}\n`;
    }
  }
  return resultString;
}
