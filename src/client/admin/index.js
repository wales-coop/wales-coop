/* eslint-disable */
import * as _ from 'ramda';
import * as api from '../api/';
import renderChart from './chart';

const blank = (l) => new Array(l).fill(0)
  .map((el, i) => ({ id: i + 1, frequency: 0, text: '' }));

export const format = _.curry((param, data) => {
  return data.reduce((acc, elJ) => {
    if (elJ.response) {
      const res = acc.slice(0);
      const val = res.find(el => el.id === elJ[`${param}_id`])
      const i = acc.indexOf(val);
      res[i] = _.evolve({ frequency: _.add(1), text: () => elJ[param] }, val);
      return res;
    }
    return acc;
  }, blank(13));
});

export const filter = _.curry((filterParam, rawData) =>
  rawData.filter(el => (filterParam ? (el.type == filterParam) : true)));

export default (formatParam = 'question', filterParam) => {
  api.getResponses()
    .then(filter(filterParam))
    .then(format(formatParam))
    .then(renderChart(formatParam, filterParam));
};

