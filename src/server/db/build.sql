BEGIN;

  CREATE TABLE IF NOT EXISTS businesses (
    id             SERIAL         PRIMARY KEY,
    username       VARCHAR(50)    UNIQUE,
    password       VARCHAR(50)    NOT NULL,
    name           VARCHAR(100)   NOT NULL,
    address        VARCHAR(150)   NOT NULL,
    type           VARCHAR(50)    NOT NULL,
    sector         VARCHAR(50)    NOT NULL,
    contact        VARCHAR(100)   NOT NULL,
    telephone      VARCHAR(15)    NOT NULL,
    email          VARCHAR(254)   NOT NULL,
    help_before    DATE           NOT NULL,
  );

  CREATE TABLE IF NOT EXISTS interests (
    id             SERIAL         PRIMARY KEY,
    business_id    INTEGER        NOT NULL      REFERENCES businesses(id),
    question_id    INTEGER        NOT NULL      REFERENCES questions(id),
    response       BOOL           NOT NULL
  );

  CREATE TABLE IF NOT EXISTS questions (
    id             SERIAL         PRIMARY KEY,
    question       VARCHAR(250)   NOT NULL,
    topic_id       INTEGER        NOT NULL      REFERENCES topics(id)
  );

  CREATE TABLE IF NOT EXISTS resources (
    id             SERIAL         PRIMARY KEY,
    description    VARCHAR(250)   NOT NULL,
    url            TEXT           NOT NULL,
    topic_id       INTEGER        NOT NULL      REFERENCES topics(id),
  );

  CREATE TABLE IF NOT EXISTS topics (
    id             SERIAL         PRIMARY KEY,
    topic          VARCHAR(250)   NOT NULL,
  );


  INSERT INTO businesses(username, password, name, address, type, sector, contact, telephone, email, help_before) 
         VALUES ('wales-coop', 'wales-coop', 'wales-coop', 'Y BORTH 13 BEDDAU WAY CAERPHILLY CF83 2AX', 'charity',
                'governmental', 'Dylan Thomas', '0300 111 5050' , 'info@wales.coop', 'Jan-08-1999');

  COMMIT;
