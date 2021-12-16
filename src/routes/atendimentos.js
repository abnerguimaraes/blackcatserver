"use strict"

module.exports = Atendimentos;

function Atendimentos(app) {

    this.VERSION = "2021-12-14";
    const Logger = require('../logger');
    const logger = new Logger("WARN");
    const AtendDB = require('../../models/atendimentos');
    const atendDB = new AtendDB();

    app.get('/atendimentos', function(req, res) { 
        res.send("Rota de atendimentos")
    });

    app.post('/atendimentos', function(req, res) {
        
        logger.warn(`atendimento.js - Recepcionado ${JSON.stringify(req.body)}`);

        const atendimento = req.body
        atendDB.adiciona(atendimento, logger);
        
        res.send("Rota de post");
    })
}