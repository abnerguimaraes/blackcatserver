"use strict";

const fs = require('fs');
const util = require('util');
const Logger = require('./logger');
const Server = require("./server");
const Custom = require("./config/custom");

try {

  const logger = new Logger("INFO");
  logger.info("main.js - Starting The logger service");

  let custom = new Custom();

  let paramObj = new Object();
  paramObj.logger = logger;
  paramObj.customObj = custom;

  const server = new Server(paramObj);

} catch (e) {
  
  console.log(`[ERROR] Got unexpected error:"${e}" with stack "${e.stack}"`);
  
}

