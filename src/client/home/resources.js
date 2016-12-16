/* global $ */
import * as api from '../api/';

export const showResources = topic => (resources) => {
  $('.resources-container h3').text(topic.topic);
  $('h4.question-text').slideUp();
  $('<hr></hr>')
    .hide()
    .appendTo('.resources-container h3')
    .css({
      border: 0,
      height: '1px',
      borderTop: `1px solid ${topic.colour}`,
      backgroundColor: topic.colour,
      color: topic.colour,
    })
    .fadeIn();

  $('<div></div>')
    .hide()
    .appendTo('.resources-container')
    .text(JSON.stringify(resources))
    .fadeIn();
};

export default (topic) => {
  console.log(topic);
  api.getResources(topic.topicId).then(showResources(topic));
};
