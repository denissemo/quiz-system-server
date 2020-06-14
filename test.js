const path = require('path');
const config = require('./config');

module.exports = {
  'config': config.dbConfig,
  'models-path': path.resolve('database', 'model'),
  'migrations-path': path.resolve('database', 'migrations')
}
