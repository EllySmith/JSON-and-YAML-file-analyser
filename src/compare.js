import _ from 'lodash';

const compareObjects = (obj1, obj2) => {
  {
    const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
    const diff = keys.flatMap((key) => {
      if (!_.has(obj1, key)) {
        return { key, value: obj2[key], state: 'added' };
      }
      if (!_.has(obj2, key)) {
        return { key, value: obj1[key], state: 'removed' };
      }
      if (obj1[key] === obj2[key]) {
        return { key, value: obj1[key], state: 'unchanged' };
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, value: compareObjects(obj1[key], obj2[key]), state: 'complex' };
      }
      return { key, value: { oldValue: obj1[key], newValue: obj2[key] }, state: 'updated' };
    });
    return diff;
  }
};
export default compareObjects;
