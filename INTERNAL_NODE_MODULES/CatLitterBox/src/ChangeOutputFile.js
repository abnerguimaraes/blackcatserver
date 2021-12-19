"use strict"

module.exports = ChangeOutputFile;

function ChangeOutputFile(pussyObj) {

    this.VERSION = '2021-12-17';

    let fs = pussyObj.fs;

    let stats = fs.statSync(pussyObj.logFile)
    let fileSizeInBytes = stats.size;
    
    let bkpFile = "./logs/log_file_bk.log"

    if (fileSizeInBytes >= pussyObj.conf.log.maxSize) {
        //clean the old bkp file;
        fs.unlink(bkpFile, (err) => {
            fs.rename(pussyObj.logFile, "./logs/log_file_bk.log", (err) => {
                pussyObj.logFile = fs.writeFile("./logs/log_file.log", "", (err) => {
                    return pussyObj.logFile;
                })
            })
        });

        return pussyObj.logFile;
    }

    return pussyObj.logFile;
    
} 