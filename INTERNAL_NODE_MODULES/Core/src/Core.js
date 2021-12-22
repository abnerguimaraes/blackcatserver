"use strict"

module.exports = Core;

function Core(tarBallObj) {
    
    //constants
    this.VERSION = "2021-12-20";

    const logger = tarBallObj.logger;

    //end of constants

    logger.info(`Core.js - This cat is waking up`);

    const DatabaseConnection = require('./DatabaseConnection');
    const databaseConnection = new DatabaseConnection(tarBallObj);

    let conexao = databaseConnection.connectToDatabase();

    this.setModel = function(route, dataCallback) {
        logger.info(`Core.setModel(): Core is setting model to ${route}`);
        const Model = require(`./models/${route}`)
        const model = new Model(tarBallObj, conexao);

        //connect to db
        return model.getData(dataCallback);
    }

    //routes models
    // const NotFound = require('./models/NotFound');
    // this.notFound = new NotFound(tarBallObj);

}