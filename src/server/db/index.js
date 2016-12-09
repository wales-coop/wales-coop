import bcrypt from 'bcrypt';
import pool from './pool';

export const loginQuery = payload => [
  'SELECT * FROM accounts WHERE username = $1',
  [payload.username],
];

export const validateLogin = payload => ({ rows }) =>
  bcrypt.compare(payload.password, rows[0].password);

export const login = payload =>
  pool
    .query(...loginQuery(payload))
    .then(validateLogin(payload));

export const registerQuery = (payload, hashedPass) => [
  'INSERT INTO businesses(username, password, name, address, type, sector, contact, telephone, email, help_before) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
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
  pool.query(...registerQuery(payload, hashedPass));

export const register = payload =>
  bcrypt.hash(payload.password, 10)
  .then(registerWithHashedPass(payload));

