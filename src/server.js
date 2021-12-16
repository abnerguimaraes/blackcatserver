"use strict";

module.exports = Server;

function Server(paramObj) {
  
    this.VERSION = "2021-12-14";
    let port = null;
    const Conexao = require('../infraestrutura/conexao');
    const conexao = new Conexao();
    const Tabelas = require('../infraestrutura/tabelas');

    if (paramObj.customObj.port == null || paramObj.customObj.port == undefined){
        port = 3000;
    } else {
        port = paramObj.customObj.port;
    }

    let app = paramObj.customObj.app;

    try {

        conexao.connect( function(err) {
            if (err) {
                paramObj.logger.error(`server.js - Error on connect to database, stack with ${e}`);
            } else {
                let tabelas = new Tabelas(conexao);

                app.listen(port, function() {
                paramObj.logger.info(`server.js - App is on and listening to ${port}`);
        });
            }
        });
  
    } catch(e) {

        paramObj.logger.error(`server.js - Error on listen port ${port} - detail: ${e}`);
    
    }

}