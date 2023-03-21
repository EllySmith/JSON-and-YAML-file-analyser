import _ from 'lodash';

import stylishFormat from './stylishFormat.js';

import plainFormat from './plainFormat.js';

import jsonFormat from './jsonFormat.js';

const applyFormat = (diff, formatName) => {
  const formatSet = {
    plain: plainFormat,
    stylish: stylishFormat,
    json: jsonFormat,
  };
  if (formatSet[formatName] === undefined) {
    throw new Error('No such format!');
  } else {
    const appliedFormat = formatSet[formatName];
    return appliedFormat(diff);
  }
};

export default applyFormat;
