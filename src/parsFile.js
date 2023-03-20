import yaml from 'js-yaml';

const parseFile = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);

    case 'yaml':
      return yaml.load(data);

    case 'yml':
      return yaml.load(data);

    default:
      throw new Error('Error format');
  }
};

export default parseFile;
