const env = process.env.NODE_ENV;
const configFile = require(`./${env}.json`);
const dbConfigFile = require(`./db.json`);

module.exports = {
    config: configFile,
    dbConfig: dbConfigFile
}
