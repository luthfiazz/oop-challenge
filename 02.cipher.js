const crypto = require('crypto-js');
class cipherClass {
    static enkripsiMethode(){
        
        // enkripsi
        let cipherText = crypto.AES.encrypt('ini tulisan rahasia','p4$$w0rd');
        let message = cipherText.toString(crypto.enc.Utf8);
        return message
    }
   static dekripsiMethode(){
        // dekripsi
        let cipText = crypto.AES.encrypt('ini tulisan rahasia','p4$$w0rd');
        let kode = crypto.AES.decrypt(cipText.toString(),'p4$$w0rd');
        let decryptedMessage = kode.toString(crypto.enc.Utf8);
        return decryptedMessage
    }
}

console.log(cipherClass.enkripsiMethode());
console.log(cipherClass.dekripsiMethode());