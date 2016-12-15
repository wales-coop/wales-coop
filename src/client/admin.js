// import * as _ from 'ramda';
import * as query from './api/index';
import renderChart from './admin/chart';

export const getJSON = () =>
  query.getResponses()
    .then(res => res);


export const formatData = (json) => {
    //  match chart data
  //  _.compose();
  console.log(json);
  return json;
};


export default () => {
  getJSON()
    .then(formatData)
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
