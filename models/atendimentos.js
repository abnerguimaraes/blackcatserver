"use strict"

module.exports = Atendimentos;

function Atendimentos() {

    this.VERSION = "2021-12-15";

    const Conexao = require('../infraestrutura/conexao');
    const conexao = new Conexao();

    this.adiciona = function(atendimento, logger) {
        const query = "INSERT INTO Atendimentos SET ?"

        conexao.query(query, atendimento, function(err, result) {
            if (err) {
                console.log(`atendimentos.js - error inserting data on table, stack with ${err}`)
            } else {
                console.log(`atendimentos.js - we got ${JSON.stringify(result)} from data base`);
            }
        });
    }

}