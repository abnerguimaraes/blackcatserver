"use strict"

module.exports = Conexao;

function Conexao() {

    this.VERSION = "2021-12-15";

    const mysql = require('mysql2');

    const conexao = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "torto0132",
        database: "agenda"
    });

    return conexao;

}