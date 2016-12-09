# Wales co-op targeted engagement tool

## Problem

Wales Co-op offers free in-person advice to co-operative businesses, but this is becoming too costly to provide in all cases. If businesses first consulted the advice available online, Wales-coop would be able to streamline its in-person services.

## Solution

The targeted engagement tool is a website which asks businesses to answer a series of questions and provides access to online advice that is tailored to the responses. Businesses can sign up to the website to persist their tailored advice and enable Wales-coop to keep track of which information is most useful to different kinds of businesses.

## Technical Notes

### Technologies

 - ES6 transpiled by Babel and bundled by Webpack.
 - Hapi and PostgreSQL for backend
 - D3 for data visualisation 
 - Handlebars for templating
 - Materialize for styling
 
### Quickstart

You will need to export COOKIE_SECRET and DB_URL environment variables from a `config.env` file in the root directory.

`npm i && npm run dev` will fire up the backend and development server.

