"use strict"

module.exports = Pandora;

function Pandora(pussyObj) {
    
    this.VERSION = "2021-12-19";

    this.logger = pussyObj.logger;

    this.logger.info(`Pandora.js - The cat is waking up`);

    const Routes = require("./RoutesLoader");
    let routes = new Routes(pussyObj);
    this.routes = routes.getRoutes();
    routes = null;

    const KoalaModule = require("./KoalaModule");
    let koalaModule = new KoalaModule(pussyObj, this.routes);
    this.koalaModule = koalaModule;
    koalaModule = null;

}