"use strict";


module.exports = Logger;

function Logger(level) {

  this.VERSION = '2021-12-13';
  
  const util = require('util');
  
  const fs = require('fs');

  const TRACE = 0;
  const DEBUG = 1;
  const INFO = 2;
  const WARN = 3;
  const ERROR = 4;
  const FATAL = 5;
    
  const RED = "\x1B[0;31m";
  const GREEN = "\x1B[0;32m";
  const YELLOW = "\x1B[0;33m";
  const BLUE = "\x1B[0;34m";
  const CYAN = "\x1B[0;36m";
  const PURPLE = "\x1B[0;35m";
  
  const DEFAULT = "\x1B[0;38m";
  
  const date = Date.now();
  const dataObj = new Date(date);
  
  const ano = dataObj.getFullYear();
  let mes = (dataObj.getMonth()+1).toString();
  mes = mes.padStart(2, "0");

  let dia = dataObj.getDay().toString();
  dia = dia.padStart(2, "0");
  let hora = dataObj.getHours().toString();
  hora = hora.padStart(2, "0");
  let minuto = dataObj.getMinutes().toString();
  minuto = minuto.padStart(2, "0");

  const agora = ano + "/" + mes + "/" + dia + " - " + hora + ":" + minuto;
    
  let levelMap;
  let levelNumber;
  let colorMessage = true;
  
  const appendToFileCallback = function(err) {
    
    if (err != null) {
      console.error(`Logger.appendToFileCallback():Error "${err}"`);
    }
    
  }
  
  const _warn = function() {
    
    let logString;  
    if (WARN >= levelNumber) {
      
      if (arguments.length == 1) {

        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${YELLOW}${agora} [WARN] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [WARN] - ${logString}\n`, appendToFileCallback);
        
      }
      
    }
  }
  this.warn = _warn;
  
  const _init = function() {
    
    levelMap = new Object();

    levelMap['TRACE'] = TRACE;
    levelMap['DEBUG'] = DEBUG;
    levelMap['INFO'] = INFO;
    levelMap['WARN'] = WARN;
    levelMap['ERROR'] = ERROR;
    levelMap['FATAL'] = FATAL;
    
    levelNumber = levelMap[level];
    
    if (level == null) {
      
      level = 'TRACE';
      levelNumber = levelMap[level];
      _warn('Log Level not defined! Using "TRACE".');
    }
    
  }
  _init();

  this.trace = function() {
    
    let logString;
    
    if (TRACE >= levelNumber) {
      
      const agora = dateFormatter.getLoggerFormatedagora();
      
      if (arguments.length == 1) {
        
        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${BLUE}${agora} [TRACE] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [TRACE] - ${logString}\n`, appendToFileCallback);
      }
      
    }
  }
  
  
  this.debug = function() {
    
    let logString;
    
    if (DEBUG >= levelNumber) {
      
      if (arguments.length == 1) {
        
        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${CYAN}${agora} [DEBUG] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [DEBUG] - ${logString}\n`, appendToFileCallback);
        
      }
      
    }
  }
  
  
  this.info = function() {
    
    let logString;
    
    if (INFO >= levelNumber) {
      
      if (arguments.length == 1) {
        
        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${GREEN}${agora} [INFO] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [INFO] - ${logString}\n`, appendToFileCallback);
        
      }
      
    }
  }
  
  
  
  this.error = function() {
    
    let logString;
    
    if (ERROR >= levelNumber) {
            
      if (arguments.length == 1) {
        
        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${RED}${agora} [ERROR] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [ERROR] - ${logString}\n`, appendToFileCallback);
        
      }
      
    }
  }
  
  
  this.fatal = function() {
    
    let logString;
    
    if (FATAL >= levelNumber) {

      if (arguments.length == 1) {
        
        logString = arguments[0];
        
      } else {
        
        logString = util.format.apply(util, arguments);
        
      }
      
      if (colorMessage == true) {
        
        fs.appendFile(1, `${PURPLE}${agora} [FATAL] - ${DEFAULT}${logString}\n`, appendToFileCallback);
        
      } else {
        
        fs.appendFile(1, `${agora} [FATAL] - ${logString}\n`, appendToFileCallback);
        
      }
      
    }
  }
  
  
  const _setLevel = function(levelParam) {
    
    if (levelParam == null) {
      _warn('Log Level not defined! Using "TRACE".');
      level = 'TRACE';
    }
    
    level = levelParam;
    levelNumber = levelMap[level];
  }
  this.setLevel = _setLevel;
  
  
  this.getLevel = function() {
    return level;
  }
  
  
  this.getMyConsole = function() {
    return myConsole;
  }
  
  
  this.setColorMessage = function(colorMessageParam) {
    colorMessage = colorMessageParam;
  }
  
}