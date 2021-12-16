"use strict"

module.exports = Tabelas;

function Tabelas(conexao) {
    const Logger = require('../src/logger');
    const logger = new Logger("DEBUG");

    this.VERSION = "2021-12-15";

    let criarAtendimentos = function() {
        
        const query = "CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

        conexao.query(query, function(error) {
            if (error) {
                logger.error(`tabelas.js - Error creating table atendimentos stack with ${error}`)
            } else {
                logger.info(`tabelas.js - Table Atendimentos successfull created`);
            }
        })

    }

    //criarAtendimentos(); rodar só uma vez;

}