"use strict"

module.exports = KoalaModule;

function KoalaModule(pussyObj) {
    
    this.VERSION = "2021-12-19";

    let logger = pussyObj.logger;
    let http = pussyObj.http;
    let app = pussyObj.koala;
    let port = pussyObj.conf.port

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
            logger.error(`Pandora.KoalaModule.requestResponse(): Client was a bad kittie trying to do a ${req.method} request, I scrach him out`);

        }


    }

    app.use(function* (res) {
        res.status = 204;
    });

    http.createServer(requestResponse).listen(port);
}