import pool from './pool';

export const loginQuery = payload => [
  'SELECT * FROM businesses WHERE username = $1',
  [payload.username],
];

export const login = payload =>
  pool.query(...loginQuery(payload));

export const postBusinessQuery = payload => [
  'INSERT INTO businesses(username, password, name, address, type, sector, contact, telephone, email, help_before) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, username',
  [
    payload.username,
    payload.hashedPass,
    payload.name,
    payload.address,
    payload.type,
    payload.sector,
    payload.contact,
    payload.telephone,
    payload.email,
    payload.helpBefore,
  ],
];

export const postBusiness = payload =>
  pool.query(...postBusinessQuery(payload));

export const getBusinessesQuery = query => (
  query.username
  ? ['SELECT * FROM businesses WHERE username = $1', [query.username]]
  : ['SELECT * FROM businesses']
);

export const getBusinesses = query =>
  pool.query(...getBusinessesQuery(query));

export const getQuestionsQuery = () => [
  `SELECT * FROM questions
   INNER JOIN topics ON questions.topic_id = topics.id`,
];

export const getQuestions = () =>
  pool.query(...getQuestionsQuery());

export const getResponsesQuery = (query) => {
  const baseQuery = `SELECT * FROM interests
      INNER JOIN businesses ON interests.business_id = businesses.id
      INNER JOIN questions ON interests.question_id = questions.id
      INNER JOIN topics ON questions.topic_id = topics.id`;
  if (query.businessId) {
    return [`${baseQuery} WHERE business_id = $1`, [query.businessId]];
  }
  if (query.type) {
    return [`${baseQuery} WHERE businesses.type = $1`, [query.type]];
  }
  return [baseQuery];
};

export const getResponses = query =>
  pool.query(...getResponsesQuery(query));

export const generateResponsesInsertValuePlaceholders = (response, idx) =>
  `($${(idx * 3) + 1}, $${(idx * 3) + 2}, $${(idx * 3) + 3})`;

export const generateResponsesInsertValues = businessId => response =>
    [businessId, response.questionId, response.response];

export const postResponsesQuery = payload => [
  `INSERT INTO interests (business_id, question_id, response) VALUES
    ${payload.responses.map(generateResponsesInsertValuePlaceholders).join(',')}`,
  [[].concat(...payload.responses.map(generateResponsesInsertValues(payload.businessId)))],
];

export const postResponses = payload =>
 pool.query(...postResponsesQuery(payload));

export const getResourcesQuery = (query) => {
  const baseQuery = `SELECT * FROM resources INNER JOIN topics
   ON resources.topic_id = topics.id`;
  return query.topicId
    ? [`${baseQuery} WHERE topic_id = $1`, [query.topicId]]
    : [baseQuery];
};

export const getResources = query =>
  pool.query(...getResourcesQuery(query));
