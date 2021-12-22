"use strict"

module.exports = ChangeOutputFile;

function ChangeOutputFile(tarBallObj) {

    this.VERSION = '2021-12-17';

    let fs = tarBallObj.fs;

    let stats = fs.statSync(tarBallObj.logFile)
    let fileSizeInBytes = stats.size;
    
    let bkpFile = "./logs/log_file_bk.log"

    if (fileSizeInBytes >= tarBallObj.conf.log.maxSize) {
        //clean the old bkp file;
        fs.unlink(bkpFile, (err) => {
            fs.rename(tarBallObj.logFile, "./logs/log_file_bk.log", (err) => {
                tarBallObj.logFile = fs.writeFile("./logs/log_file.log", "", (err) => {
                    return tarBallObj.logFile;
                })
            })
        });

        return tarBallObj.logFile;
    }

    return tarBallObj.logFile;
    
} 