import test from 'ava';
import getDataSet from '../../../../src/client/home/chart-helper';

test('converts questionnaire results to dataset', (t) => {
  const input = JSON.parse('{"questions":[{"id":1,"question":"Have you started your social enterprise?","topic_id":1,"topic":"Before you Start a Social Business"},{"id":2,"question":"Do you have an engaged group of people?","topic_id":2,"topic":"Starting a Social Business"},{"id":2,"question":"Have you formed a legal structure?","topic_id":2,"topic":"Starting a Social Business"},{"id":2,"question":"Are you bidding for contracts or seeking funding?","topic_id":2,"topic":"Starting a Social Business"},{"id":2,"question":"Are you employing staff?","topic_id":2,"topic":"Starting a Social Business"},{"id":3,"question":"Are you confident in your organisations governance?","topic_id":3,"topic":"Running a Social Business"},{"id":3,"question":"Do you use a form of Social Accounting?","topic_id":3,"topic":"Running a Social Business"},{"id":3,"question":"Do you have a skilled management?","topic_id":3,"topic":"Running a Social Business"},{"id":4,"question":"Are you looking to grow (expand, diversify etc.)?","topic_id":4,"topic":"Growing A Social Business"},{"id":4,"question":"Are you thinking of connecting with like-minded groups?","topic_id":4,"topic":"Growing A Social Business"},{"id":4,"question":"Do you think your idea could work in other areas?","topic_id":4,"topic":"Growing A Social Business"},{"id":4,"question":"Would you like to buy another business to help you grow?","topic_id":4,"topic":"Growing A Social Business"},{"id":5,"question":"Would you like to see some case studies?","topic_id":5,"topic":"Case Studies"}],"responses":[true,true,true,true,true,true,false,false,false,false,false,false,false]}');
  const expected = [
    { topicId: '1',
      totals: { true: 1, total: 1, proportion: 1 },
      topic: 'Before you Start a Social Business' },
    { topicId: '2',
      totals: { true: 4, total: 4, proportion: 1 },
      topic: 'Starting a Social Business' },
    { topicId: '3',
      totals: { true: 1, false: 2, total: 3, proportion: 0.3333333333333333 },
      topic: 'Running a Social Business' },
    { topicId: '4',
      totals: { false: 4, total: 4, proportion: 0 },
      topic: 'Growing A Social Business' },
    { topicId: '5',
      totals: { false: 1, total: 1, proportion: 0 },
      topic: 'Case Studies' },
  ];
  t.deepEqual(getDataSet(input), expected);
});
