const express = require('express');
var prueba = require('./prueba.js');
//var OSM = require('./osm.js');

/*
 * Referenciales de los combos
 */
module.exports = (app) => {
//  app.use('/', OSM),
  app.use('/prueba', prueba)
}
