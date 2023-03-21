import _ from 'lodash';

const padLine = (depth) => `  ${' '.repeat(4).repeat(depth - 1)}`;
const padBracket = (depth) => `${' '.repeat(4).repeat(depth)}`;
const getLine = (key, value, char, depth) => `${padLine(depth)}${char}${key}: ${value}`;
const wrapBrackets = (body, depth) => `{\n${body}\n${padBracket(depth)}}`;

const prepareValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.entries(value);
  const items = entries.map(([key, val]) => getLine(key, prepareValue(val, depth + 1), '  ', depth + 1));
  const body = items.join('\n');
  return wrapBrackets(body, depth);
};

const stylishDiff = (diff, depth) => {
  const items = diff.flatMap(({ key, value, state }) => {
    const chars = { added: '+ ', removed: '- ', unchanged: '  ' };
    switch (state) {
      case 'updated':
        return [getLine(key, prepareValue(value.oldValue, depth + 1), chars.removed, depth + 1),
          getLine(key, prepareValue(value.newValue, depth + 1), chars.added, depth + 1)];

      case 'complex':
        return getLine(key, stylishDiff(value, depth + 1), '  ', depth + 1);

      default:
        return getLine(key, prepareValue(value, depth + 1), chars[state], depth + 1);
    }
  });
  const body = items.join('\n');
  return wrapBrackets(body, depth);
};

const stylishFormat = (diff) => stylishDiff(diff, 0);

export default stylishFormat;
