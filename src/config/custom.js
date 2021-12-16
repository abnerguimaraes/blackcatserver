"use strict"

module.exports = Custom;

function Custom() {

    this.VERSION = "2021-12-14";

    const express = require('express');
    const consign = require('consign');

    const bodyParser = require('body-parser');
  
    const app = express();

    app.use(bodyParser.json());
    
    //definição do local das rotas....
    consign().include('src/routes').into(app);

    let customObj = new Object();
    let port = 5000;
    customObj.port = port;
    customObj.app = app;

    return customObj;
}