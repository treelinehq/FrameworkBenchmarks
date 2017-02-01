/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/json':      'JsonSerialization.test',
  '/db':        'SingleDatabaseQuery.test',
  '/queries':   'MultipleDatabaseQueries.test',
  '/fortunes':  'Fortunes.test',
  '/updates':   'DatabaseUpdates.test',
  '/plaintext': 'Plaintext.test'

};
