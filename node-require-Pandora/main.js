"use strict"

const util = require('util');
const fs = require('fs');
const Sequelize = require('sequelize');
const mysql = require('mysql2');

try {

  let tarBallObj = new Object();
  
  const conf = "./conf/conf.json";
  const logFile = JSON.parse(fs.readFileSync(conf)).pandora.log.logPath;

  tarBallObj.conf = JSON.parse(fs.readFileSync(conf)).pandora;
  tarBallObj.fs = fs;
  tarBallObj.util = util;
  tarBallObj.logFile = logFile;
  tarBallObj.mysql = mysql;

  const CatLitterBox = require('CatLitterBox');
  const logger = new CatLitterBox("INFO", tarBallObj);
  tarBallObj.logger = logger;

  logger.info(`Pandora - Initializing logger module.`);
  tarBallObj.Sequelize = Sequelize;

  const Core = require('core');
  const core = new Core(tarBallObj);
  tarBallObj.core = core;

  const Koala = require('koala');
  const koala = new Koala();
  tarBallObj.koala = koala;

  const http = require('http');
  tarBallObj.http = http;

  const Pandora = require("Pandora");
  const pandora = new Pandora(tarBallObj);
  
} catch(e) {
  
  console.log(`[ERROR] Got unexpected error:"${e}" with stack "${e.stack}"`);
  
}

