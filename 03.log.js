class LogClass{
    static logMethod(){
        const fs = require('fs')  
        ,Log = require('log')
        ,log = new Log('debug', fs.createWriteStream('my.log'));
        // const log = new Log('info');
        
        log.info("This is an information about something.");
        log.error("We can't divide any numbers by zero.");
        log.notice("Someone loves your status.");
        log.warning("Insufficient funds.");
        log.debug("This is debug message.");
        log.alert("Achtung! Achtung!");
        log.critical("Medic!! We've got critical damages.");
        log.emergency("System hung. Contact system administrator immediately!");
    }
}

// console.log(a.logMethod());
LogClass.logMethod()
