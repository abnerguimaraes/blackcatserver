"use strict"

module.exports = Pandora;

function Pandora(tarBallObj) {
    
    this.VERSION = "2021-12-19";

    this.logger = tarBallObj.logger;

    this.logger.info(`Pandora.js - This cat is waking up`);

    const Routes = require("./RoutesLoader");
    let routes = new Routes(tarBallObj);
    this.routes = routes.getRoutes();
    routes = null;

    const KoalaModule = require("./KoalaModule");
    let koalaModule = new KoalaModule(tarBallObj, this.routes);
    this.koalaModule = koalaModule;
    koalaModule = null;

}