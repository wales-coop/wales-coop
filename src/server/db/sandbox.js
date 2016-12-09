//to reset the dp drop the tables ( not truncate ) id must be reset
//then run in order

const pg = require('pg');
const { topics, questions, resources } = require('./resources.js');

const config = 'postgres://jdsdgevy:2PiphF-8zFIJNIzAtieaeNSW9ZoMVDwW@elmer.db.elephantsql.com:5432/jdsdgevy';
const client = new pg.Client(config);

let q1 = 'INSERT INTO topics(topic) VALUES ($1)',
  r1 = 'topics',
  p1 = '[el]',
  q2 = 'INSERT INTO questions(question, topic_id) VALUES ($1, $2)',
  r2 = 'questions',
  p2 = '[el.question, el.topic]',
  q3 =  'INSERT INTO resources(description, url, topic_id) VALUES ($1, $2, $3)',
  r3 = 'resources',
  p3 = '[el.title, el.URL, el.topic]';

let insert = ((query, res ,  data) => () => {
  pg.connect(config, (err, client, done) => {

    if(err)  console.log(err)
    
    eval(res).forEach( function(el) {
      client.query( query, eval(data));
    } );

    done()
  });
});

insert(q3, r3, p3)()
