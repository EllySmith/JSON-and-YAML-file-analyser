import stylishFormat from "./stylishFormat.js";

import plainFormat from "./plainFormat.js";

const jsonFormat = (diff) => JSON.stringify(diff);

const applyFormat = (diff, formatName) => {
  const formatSet = {
    plain: plainFormat,
    stylish: stylishFormat,
    json: jsonFormat,
  };

  const appliedFormat = formatSet[formatName];
  return appliedFormat(diff);
};

export default applyFormat;
