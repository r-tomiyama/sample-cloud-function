import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import escapeHtml from 'escape-html';

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
export const helloHttp: HttpFunction = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
};
