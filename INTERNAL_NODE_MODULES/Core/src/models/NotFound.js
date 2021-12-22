"use strict"

const Core = require("../Core");

module.exports = NotFound;

function NotFound(tarBallObj, conexao) {
    
    //constants
    this.VERSION = "2021-12-20";

    const logger = tarBallObj.logger;

    const util = tarBallObj.util;

    let queryResult = null;

    //end of constants

    logger.info(`Core.NotFound - Model is modeling data to you.`);

    const query = "SELECT * FROM sells";

    this.getData = function(dataCallback){

        conexao.query(query, "", dataCallback);

    }
}