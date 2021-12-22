"use strict"

module.exports = GetSellsPlace;

function GetSellsPlace(routeObj, tarBallObj) {
    this.VERSION = "2021-12-19";

    let logger = tarBallObj.logger;

    let req = routeObj.req;
    let res = routeObj.res;
    let route = routeObj.route;

    // const sequelize = tarBallObj.sequelize;

    const core = tarBallObj.core;

    //end of contraints

    logger.info(`Pandora.GetSellsPlace.js - Loaded a request.`);

    var objResp = new Object();

    let dataCallback = function(err, data){
        
        if (err) {

            logger.error(`Pandora.GetSellsPlace.dataCallback(): Something goes wrong, ${err}`);
            
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
            res.write("INTERNAL SERVER ERROR");
            res.end();


        } else {
        
            logger.info(`Pandora.GetSellsPlace.dataCallback(): Core send the data, good kitie.`);
            objResp = data;

            // send data back to client
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
            res.write(JSON.stringify(objResp));
            res.end();
            
        }
        
    }
    
    core.setModel(route, dataCallback);

}