import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plainFormat = (diff, path = []) => {
  const valuesToShow = diff.filter((item) => item.state !== 'unchanged');
  const output = valuesToShow.map((item) => {
    const keyPath = path.concat(item.key);
    const keyName = keyPath.join('.');
    switch (item.state) {
      case 'removed':
        return `Property '${keyName}' was removed`;

      case 'added': {
        const val = getValue(item.value);
        return `Property '${keyName}' was added with value: ${val}`; }

      case 'updated': {
        const oldVal = getValue(item.value.oldValue);
        const newVal = getValue(item.value.newValue);
        return `Property '${keyName}' was updated. From ${oldVal} to ${newVal}`; }

      default:
        return plainFormat(item.value, keyPath);
    }
  }).join('\n');

  return output;
};

export default plainFormat;
