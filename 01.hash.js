class hashMd5{
    static md5Method(){
        const crypto = require('crypto-js');
        let a = crypto.MD5('secret').toString();
        return a
    }
}
class hashSha1{
    static sha1Method(){
        const crypto = require('crypto-js');
        let a = crypto.SHA1('secret').toString();
        return a
    }
}
class hashSha256{
    static sha256Method(){
        const crypto = require('crypto-js');
        let a = crypto.SHA256('secret').toString();
        return a
    }
}
class hashSha512{
    static sha512Method(){
        const crypto = require('crypto-js');
        let a = crypto.SHA512('secret').toString();
        return a
    }
}

console.log(hashMd5.md5Method());
console.log(hashSha1.sha1Method());
console.log(hashSha256.sha256Method());
console.log(hashSha512.sha512Method());
