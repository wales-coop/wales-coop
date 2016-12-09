import bcrypt from 'bcrypt';
import pool from './pool';

export const loginQuery = payload => [
  'SELECT * FROM accounts WHERE username = $1',
  [payload.username],
];

export const login = payload =>
  pool.query(...loginQuery(payload));

export const postBusinessQuery = (payload, hashedPass) => [
  'INSERT INTO businesses(username, password, name, address, type, sector, contact, telephone, email, help_before) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, username',
  [
    payload.username,
    hashedPass,
    payload.name,
    payload.address,
    payload.type,
    payload.sector,
    payload.contact,
    payload.telephone,
    payload.email,
    payload.help_before,
  ],
];

export const registerWithHashedPass = payload => hashedPass =>
  pool.query(...postBusinessQuery(payload, hashedPass));

export const postBusiness = payload =>
  bcrypt.hash(payload.password, 10)
  .then(registerWithHashedPass(payload));

export const getBusinessesQuery = query => (
  query.username
  ? ['SELECT * FROM businesses WHERE username = $1', query.username]
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
  return query.id
    ? [`${baseQuery} WHERE business_id = $1`, query.id]
    : [baseQuery];
};

export const getResponses = query =>
  pool.query(...getResponsesQuery(query));

