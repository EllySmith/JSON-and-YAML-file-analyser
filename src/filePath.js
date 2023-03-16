import yaml from 'js-yaml';

const filePath = (data, format) => {
  const path = { yml: yaml.load, yaml: yaml.load, json: JSON.parse };
  return path[format](data).toString();
};

export default filePath;
