import * as R from 'ramda';

export const zipResponses = state => (question, i) => ({
  ...question,
  response: (state.responses[i] !== undefined ? state.responses[i] : null),
});

export const objToArr = R.compose(
  R.map(R.zipObj(['topic', 'totals'])),
  R.toPairs,
);

export const byTopic = R.groupBy(R.prop('topic'));

export const sumResponses = R.compose(
  resps => R.assoc('proportion', (resps.true || 0) / resps.total, resps),
  resps => R.assoc('total', R.sum(R.values(resps)), resps),
  R.countBy(R.prop('response')),
);

export const totalsByTopic = R.compose(
  objToArr,
  R.map(sumResponses),
  byTopic,
);

const getDataSet = state =>
  totalsByTopic(state.questions.map(zipResponses(state)));

export default getDataSet;
