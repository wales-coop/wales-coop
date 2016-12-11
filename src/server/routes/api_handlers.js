import * as db from '../db/';
import { makeCookie, handleError } from './ui_handlers';

export const loginPostedBusiness = (req, rep) => ({ rows }) => {
  req.cookieAuth.set(makeCookie(rows[0]));
  return rep.redirect('/');
};

export const returnData = (req, rep) => ({ rows }) =>
  rep(JSON.stringify(rows));

export const postBusiness = (req, rep) =>
  db.postBusiness(req.payload)
    .then(loginPostedBusiness(req, rep))
    .catch(handleError(req, rep));

export const getBusinesses = (req, rep) =>
  db.getBusinesses(req.query)
    .then(returnData(req, rep))
    .catch(handleError(req, rep));

export const getResponses = (req, rep) =>
  db.getResponses(req.query)
    .then(returnData(req, rep))
    .catch(handleError(req, rep));

export const getResources = (req, rep) =>
  db.getResources()
    .then(returnData(req, rep))
    .catch(handleError(req, rep));

export const postResponses = (req, rep) =>
  db.postResponses(req.payload)
    .then(returnData(req, rep))
    .catch(handleError(req, rep));

export const getQuestions = (req, rep) =>
  db.getQuestions()
    .then(returnData(req, rep))
    .catch(handleError(req, rep));

