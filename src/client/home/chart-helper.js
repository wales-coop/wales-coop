import * as R from 'ramda';

export const zipResponses = state => (question, i) => ({
  ...question,
  response: (state.responses[i] !== undefined ? state.responses[i] : null),
});

export const objToArr = R.compose(
  R.map(R.zipObj(['topicId', 'totals'])),
  R.toPairs,
);

export const sumResponses = R.compose(
  resps => R.assoc('proportion', (resps.true || 0) / resps.total, resps),
  resps => R.assoc('total', R.sum(R.values(resps)), resps),
  R.countBy(R.prop('response')),
);

export const byTopic = R.groupBy(R.prop('topic_id'));

export const totalsByTopic = R.compose(
  objToArr,
  R.map(sumResponses),
  byTopic,
);

export const addText = questions => topic =>
  R.assoc(
    'topic',
    R.find(R.propEq('topic_id', Number(topic.topicId)), questions).topic,
    topic,
  );

const getDataSet = state =>
  R.map(
    addText(state.questions),
    totalsByTopic(state.questions.map(zipResponses(state))),
  );

export default getDataSet;
