"use strict"

module.exports = NotFound;

function NotFound(routeObj, pussyObj) {
    this.VERSION = "2021-12-19";

    let logger = pussyObj.logger;

    let req = routeObj.req;
    let res = routeObj.res;

    logger.info(`Pandora.NotFoud.js - Loaded a request.`);


    var objResp = new Object();
    objResp.nome = "Abner";
    objResp.desc = "All you need";

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.write(JSON.stringify(objResp));
    res.end();

}