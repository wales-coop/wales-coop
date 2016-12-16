/* eslint-disable */
import * as _ from 'ramda';
import * as query from './api/index';
import renderChart from './admin/chart';

export const getJSON = () => (
  query.getResponses()
    .then(res => res)
);

const blank = (l) => new Array(l).fill(0)
  .map((el, i) => Object({ id: i + 1, frequency: 0, text: '' }));

export const format = _.curry((param, data) => {
  return data.reduce((acc, elJ) => {
    if (elJ.response) {
      const res = acc.slice(0);
      const val = res.find(el => el.id === elJ[`${param}_id`]);
      const i = acc.indexOf(val);
      res[i] = _.evolve({ frequency: _.add(1), text: () => elJ[param] }, val);
      return res;
    }
    return acc;
  }, blank(13));
});



export default (formatParam = 'question', typeFilter = 'all') => {
  console.log('formatParam: ', formatParam)
  console.log('type: ', typeFilter)
  if (typeFilter === 'all'){
    getJSON()
      .then(format(filterParam))
      .then(renderChart);
  }
  else {
    getJSON()
      .then(filter(typeFilter))
      .then(format(filterParam))
      .then(renderChart);
  }
};

