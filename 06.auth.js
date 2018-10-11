const validator = require('validator');


class Auth{
    constructor(){
        this.users={
            "id" : 1,
            "username" : "root",
            "password" : "123",
            "last_login" : new Date('2018,10,10')

        }
    }
    login(data){
        this.result=data
        if(this.result.username===this.users.username && 
            this.result.password === this.users.password){
                console.log('sukses')
            }else{
                console.log('gagal')   
            }
            return data
        }
        validate(x){
            this.valid =x
           const name = validator.isAlphanumeric(this.valid.username)
           const pass = validator.isAlphanumeric(this.valid.password)
           
           console.log(name)
           console.log(pass)
        }
        logout(){
            return delete this.users.username && delete this.users.password
        }
        userlist(){
            console.log(this.users)
        }
        id(){
            console.log(this.users.id)  
        }
        check(){
            if(this.users.username && this.users.password){
                return true
            }else{
                return false
            }
        }
        guest(){
            return !this.check()
        }
        lastlogin(){
            console.log(this.users.last_login)
        }
    }
    
    
    const run = new Auth();
    // console.log(run);
    run.login({username:'root',password:'secret'});
    // run.validate({"username":"root","password":"secret"});
    
    // console.log(run.logout())
    run.userlist()

    // run.id()
    console.log(run.check())
    // console.log(run.guest())
    run.lastlogin()



   
    