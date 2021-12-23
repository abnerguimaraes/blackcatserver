"use strict"

module.exports = KoalaModule;

function KoalaModule(tarBallObj) {
    
    this.VERSION = "2021-12-22";

    let logger = tarBallObj.logger;
    let http = tarBallObj.http;
    let app = tarBallObj.koala;
    let port = tarBallObj.conf.port
    let static_path = tarBallObj.conf.static_path;
    let fs = tarBallObj.fs;

    logger.info(`Dionisio.KoalaModule.js - Preparing the server to listen the port ${port}`);
    
    const reqError = function(e) {
        logger.error(`Dionisio.KoalaModule.reqError(): Request with an error ${e} and ${e.stack}`);
    }

    const resError = function(e) {
        logger.error(`Dionisio.KoalaModule.resError(): Response with an error ${e} and ${e.stack}`);
    }

    const requestResponse = function(req, res) {
    
        req.on('error', reqError);
        res.on('error', resError);
        
        logger.warn(`Dionisio.KoalaModule.requestResponse(): We got a request to ${req.url}`);

        try {
            let staticRet = fs.readFileSync(static_path + req.url, 'utf8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=UTF-8');
            res.write(staticRet);
            res.end();
        }
        catch (e) {
            logger.error(`Dionisio.KoalaModule.requestResponse(): error serving the file, detail: "${e}"`);
        }

    }

    app.use(function* (res) {
        res.status = 204;
    });

    http.createServer(requestResponse).listen(port);
}