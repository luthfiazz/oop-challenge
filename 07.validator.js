const validator = require('validator');

class Validator{
    constructor(username,email,name,zip,is_admin,age){
            this.username=username,
            this.email=email,
            this.name=name,
            this.zip=zip,
            this.is_admin=is_admin,
            this.age=age
        }

    fails(){
        this.username=validator.isAlphanumeric(this.username)
        this.email=validator.isEmail(this.email)
        this.name=validator.isAlphanumeric(this.name)
        this.zip=validator.isAlphanumeric(this.zip)
        this.is_admin=validator.isAlphanumeric(this.is_admin)
        this.age=validator.isAlphanumeric(this.age)
    }
    message(){
        if(this.username==true){
            console.log("username benar")
        }else{
            console.log("username salah!")
        }
        if(this.email ==true){
            console.log("email benar")
        }else{
            console.log("email salah!")
        }
        if(this.name==true){
            console.log("nama benar")
        }else{
            console.log("nama salah!")
        }
        if(this.zip==true){
            console.log("zip benar")
        }else{
            console.log("zip slaah!")
        }
        if(this.is_admin==true){
            console.log("is_admin benar")
        }else{
            console.log("is_admin salah!")
        }
        if(this.age==true){
            console.log("age benar")
        }else{
            console.log("age salah!")
        }
    }
    passess(){
        return this.username && this.email && this.name && this.zip && this.is_admin && this.age  
    }
    error(){
        return !this.passess()
    }
} 

const validasi = new Validator("luthfiaz","luthfi@gmail.com","luthfi","40253","100","17")
// validasi.fails()
validasi.message()

// console.log(validasi.passess())
console.log(validasi.error())

