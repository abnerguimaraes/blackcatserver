"use strict"

module.exports = DatabaseConnection;

function DatabaseConnection(tarBallObj) {
    
    //constraints

    this.VERSION = "2021-12-21";

    const logger = tarBallObj.logger;

    const config = tarBallObj.conf.coreHouse;

    const mysql = tarBallObj.mysql;

    const conexao = mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.pass,
        database: config.db
    });

    //end of contraints
    this.connectToDatabase = function() {
        
        conexao.connect(function(err) {
            if (err) {

                logger.error(`Core.DatabaseConnection.connectToDatabase(): Got an error connecting with database, ${err}`);
                error = err;

            } else {

                logger.info(`Core.DatabaseConnection.connectToDatabase(): Core is connected with database`);

            };
        });

        return conexao;

    }

    this.disconnectToDatabase = function(conexao) {
        
        conexao.close(function(err) {
            if (err) {

                logger.error(`Core.DatabaseConnection.disconnectToDatabase(): Got an error disconnecting with database, ${err}`);
                error = err;

            } else {

                logger.info(`Core.DatabaseConnection.disconnectToDatabase(): Core is disconnected with database`);
                // return conexao;

            };
        });

    }
    

}