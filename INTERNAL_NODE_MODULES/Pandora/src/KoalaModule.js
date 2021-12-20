"use strict"

module.exports = KoalaModule;

function KoalaModule(pussyObj, routes) {
    
    this.VERSION = "2021-12-19";

    let logger = pussyObj.logger;
    let http = pussyObj.http;
    let app = pussyObj.koala;
    let port = pussyObj.conf.port

    let routesNames = new Array();

    if (routes && routes.length) {

        for (let i = 0; i < routes.length; i++) {

            let item = "/"
            item += routes[i].slice(0, routes[i].indexOf(".js")).toLowerCase();
            routesNames.push(item);

        }

    }

    logger.info(`Pandora.KoalaModule.js - Preparing the server to listen the port ${port}`);
    
    const reqError = function(e) {
        logger.error(`Pandora.KoalaModule.reqError(): Request with an error ${e} and ${e.stack}`);
    }

    const resError = function(e) {
        logger.error(`Pandora.KoalaModule.resError(): Response with an error ${e} and ${e.stack}`);
    }

    const requestResponse = function(req, res) {
    
        req.on('error', reqError);
        res.on('error', resError);
        
        logger.warn(`Pandora.KoalaModule.requestResponse(): We got a request to ${req.url}`);

        if (req.method != "POST") {
            
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
            res.write('Sorry, our API only supports POST rquests');
            res.end();
            logger.error(`Pandora.KoalaModule.requestResponse(): Client was a bad kittie trying to do a ${req.method} request, I scrached him away!`);

        } else {

            let routeObj = new Object();
                routeObj.req = req;
                routeObj.res = res;
            
            if (routesNames.indexOf(req.url) > -1) {
                
                let fileName = routes[routesNames.indexOf(req.url)];

                logger.info(`Pandora.KoalaModule.requestResponse():About to load route "${fileName}"`);

                let RouteRequire = require('./routes/' + fileName);
                let routeRequire = new RouteRequire(routeObj, pussyObj);

            } else {
                console.log("não achou " + req.url + " - " + routesNames);
            }

        }


    }

    app.use(function* (res) {
        res.status = 204;
    });

    http.createServer(requestResponse).listen(port);
}