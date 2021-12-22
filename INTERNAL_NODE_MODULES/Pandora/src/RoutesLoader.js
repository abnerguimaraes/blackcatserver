"use strict"

module.exports = RoutesLoader;

function RoutesLoader(tarBallObj) {
    this.VERSION = "2021-12-19";

    let fs = tarBallObj.fs;
    let logger = tarBallObj.logger;

    let routes = fs.readdirSync('./node_modules/Pandora/src/routes');

    logger.info(`Pandora.RoutesLoader.js - Found this paths to the cat: ${routes}`);

    this.getRoutes = function() {
        return routes;
    }

} 