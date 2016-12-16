import * as api from '../api/';

export default (topic) => {
  console.log(topic);
  api.getResources(topic.topicId).then(console.log.bind(console));
};
