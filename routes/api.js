'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  /**
   * Endpoint in which we will do the conversion
   * @ queryString
   */
  app
  .route('/api/convert')
  .get( (request, response) => {
    /**
     * We should:
     * 1) Get the data from the queryString
     * 2) Convert the data using the hadler
     * 3) Check if the data is correct
     */
    const data = request.query.input; // The data is comming under the query input

    // Valor inicial
    const initNum = convertHandler.getNum(data);
    // Unidad inicial
    const initUnit = convertHandler.getUnit(data);




  }) // ! .get

};
