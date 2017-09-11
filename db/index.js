var env = process.env.NODE_ENV || 'desarrollo';
var config = require('../config/config')[env];
var logger = require("../utils/logger");
var Pool = require('pg-pool');
var pool = new Pool({
    database: config.DAC.base,
    user: config.DAC.usuario,
    password: config.DAC.password,
    host: config.DAC.host,
    max: 20, // set pool max size to 20 
    min: 4, // set min pool size to 4 
    idleTimeoutMillis: 1000, // close idle clients after 1 second 
    connectionTimeoutMillis: 1000
});
// this is the right way to export the query method 
module.exports = {
  query: (text, params) => pool.query(text, params)
};