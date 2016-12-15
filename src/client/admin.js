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

export const filter = _.curry((param, data) => {
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

export default (filterParam = 'question') => {
  getJSON()
    .then(filter(filterParam))
    .then(renderChart);
};

/* const data = [*/
// { id: 'q1', frequency: 79, text: 'Have you started your social enterprise?' },
// { id: 'q2', frequency: 100, text: 'Do you have an engaged group of people?' },
// { id: 'q3', frequency: 200, text: 'Have you formed a legal structure?' },
// { id: 'q5', frequency: 125, text: 'Are you bidding for contracts or seeking funding?' },
// { id: 'q7', frequency: 400, text: 'Are you employing staff?' },
// { id: 'q9', frequency: 300, text: 'Are you confident in your organisations governance?' },
/* ]; */
