"use strict"

const util = require('util');
const fs = require('fs');

try {

  let pussyObj = new Object();
  
  const conf = "./conf/conf.json";
  const logFile = JSON.parse(fs.readFileSync(conf)).pandora.log.logPath;

  pussyObj.conf = JSON.parse(fs.readFileSync(conf)).pandora;
  pussyObj.fs = fs;
  pussyObj.logFile = logFile;

  const CatLitterBox = require('CatLitterBox');
  const logger = new CatLitterBox("INFO", pussyObj);
  pussyObj.logger = logger;

  logger.info(`Pandora - Initializing logger module.`);
  
  const Koala = require('koala');
  const koala = new Koala();
  pussyObj.koala = koala;

  const http = require('http');
  pussyObj.http = http;

  const Pandora = require("Pandora");
  const pandora = new Pandora(pussyObj);
  
} catch(e) {
  
  console.log(`[ERROR] Got unexpected error:"${e}" with stack "${e.stack}"`);
  
}

