const pg = require('pg')

const config = 'postgres://jdsdgevy:2PiphF-8zFIJNIzAtieaeNSW9ZoMVDwW@elmer.db.elephantsql.com:5432/jdsdgevy';
const client = new pg.Client(config);

const questionsJson = '[{ "topic":"Before you Start a Social Business",  "question":"Have you started your social enterprise?", "class":"question-form-section-default", "answer":false}, {"topic":"Starting a Social Business", "question":"Do you have an engaged group of people?", "class":"question-form-section-1", "answer":false}, {"topic":"Starting a Social Business", "question":"Have you formed a legal structure?", "class":"question-form-section-1", "answer":false}, {"topic":"Starting a Social Business", "question":"Are you bidding for contracts or seeking funding?", "class":"question-form-section-1", "answer":false}, {"topic":"Starting a Social Business", "question":"Are you employing staff?", "class":"question-form-section-1", "answer":false}, {"topic":"Running a Social Business", "question":"Are you confident in your organisations governance?", "class":"question-form-section-2", "answer":false}, {"topic":"Running a Social Business", "question":"Do you use a form of Social Accounting?", "class":"question-form-section-2", "answer":false}, {"topic":"Running a Social Business", "question":"Do you have a skilled management?", "class":"question-form-section-2", "answer":false}, {"topic":"Growing A Social Business", "question":"Are you looking to grow (expand,  diversify etc.)?", "class":"question-form-section-3", "answer":false}, {"topic":"Growing A Social Business", "question":"Are you thinking of connecting with like-minded groups?", "class":"question-form-section-3", "answer":false}, {"topic":"Growing A Social Business", "question":"Do you think your idea could work in other areas?", "class":"question-form-section-3", "answer":false}, {"topic":"Growing A Social Business", "question":"Would you like to buy another business to help you grow?", "class":"question-form-section-3", "answer":false}, {"topic":"Case Studies", "question":"Would you like to see some case studies?", "class":"question-form-section-4", "answer":false}, {"topic":null, "question":"Click on sections of the doughnut to show content specific to the questions you answered", "class":"question-form-section-default", "answer":false}]';

const topics = ["Before you Start a Social Business","Starting a Social Business","Running a Social Business","Growing A Social Business","Case Studies"];


const questions = JSON.parse(questionsJson);

pg.connect(config, (err, client, done) => {
  // Handle connection errors
  if(err) {
    done();
    console.log(err);
    return res.status(500).json({success: false, data: err});
  }
  questions.forEach( el => {
    client.query('INSERT INTO topics(topic) VALUES ($1)', [el.topic] );
  });
  done();
});

