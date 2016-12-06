import fs from 'fs';
import pool from './pool';

const sql = fs.readFileSync(`${__dirname}/build.sql`, 'utf8');

const createTables = pool.query(sql, (error, result) => (
  error
  // eslint-disable-next-line no-console
  ? console.log('Error:', error)
  // eslint-disable-next-line no-console
  : console.log('Loaded PostgreSQL tables:', result)
));

export default createTables;
