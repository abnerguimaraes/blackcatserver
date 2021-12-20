"use strict"

module.exports = RoutesLoader;

function RoutesLoader(pussyObj) {
    this.VERSION = "2021-12-19";

    let fs = pussyObj.fs;
    let logger = pussyObj.logger;

    let routes = fs.readdirSync('./node_modules/Pandora/src/routes');

    logger.warn(`Pandora.RoutesLoader.js - Found this paths to the cat: ${routes}`);

    this.getRoutes = function() {
        return routes;
    }

}