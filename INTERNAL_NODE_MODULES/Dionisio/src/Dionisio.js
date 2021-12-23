"use strict"

module.exports = Dionisio;

function Dionisio(tarBallObj) {
    
    //constants
    this.VERSION = "2021-12-22";

    const logger = tarBallObj.logger;

    //end of constants

    logger.info(`Dionisio.js - This cat is waking up`);

    const KoalaModule = require("./KoalaModule");
    let koalaModule = new KoalaModule(tarBallObj);
    this.koalaModule = koalaModule;
    koalaModule = null;

}