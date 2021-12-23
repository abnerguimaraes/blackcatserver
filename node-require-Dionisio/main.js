"use strict"

const util = require('util');
const fs = require('fs');

try {

  let tarBallObj = new Object();
  
  const conf = "./conf/conf.json";
  const logFile = JSON.parse(fs.readFileSync(conf)).dionisio.log.logPath;

  tarBallObj.conf = JSON.parse(fs.readFileSync(conf)).dionisio;
  tarBallObj.fs = fs;
  tarBallObj.util = util;
  tarBallObj.logFile = logFile;

  const CatLitterBox = require('CatLitterBox');
  const logger = new CatLitterBox("INFO", tarBallObj);
  tarBallObj.logger = logger;

  logger.info(`Dionisio - Initializing logger module.`);

  const Koala = require('koala');
  const koala = new Koala();
  tarBallObj.koala = koala;

  const http = require('http');
  tarBallObj.http = http;

  const Dionisio = require("Dionisio");
  const dionisio = new Dionisio(tarBallObj);
  
} catch(e) {
  
  console.log(`[ERROR] Got unexpected error:"${e}" with stack "${e.stack}"`);
  
}

