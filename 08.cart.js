const fs = require('fs')

class Cart{
    constructor(){
        this.item = []
        
        
    }
    add(items){
        this.item.push(items)
        return this
        
    }
    remove(del){
        this.item = this.item.filter(x => x.item_id != del.item_id)
        return this
    }
    total(){
       return this.item.length
        
    }
    totalQty(){
        const a = this.item.map(v => v.quantity)
        const reducer = (a,b) => a + b 
        return a.reduce(reducer)
        
    }

    showAll(){
        return this.item
    }
    totalHarga(){
        if(this.disco>0){
         this.addDisc(this.disco)
            return this.price

        }
        else {
            this.kalkulasi()
            return this.price
        }
        
        
    }
    kalkulasi(){
        const x = this.item.map(w => w.price * w.quantity)
        const y = (a,b) => a + b
        
        this.price =  x.reduce(y)
   
        return this.price
    }
    addDisc(disco){
        this.disco = disco
        
        this.price =  this.kalkulasi() - (this.kalkulasi() *  disco) / 100
        
    }

    output(){
        fs.writeFile('log.txt',JSON.stringify(cart),function(err){
            if(err) throw err
        })

    }
    
}

const cart = new Cart()

cart.add({item_id : 1,price : 2000,quantity : 1})
    .add({item_id : 2,price : 2000,quantity : 1})
    .add({item_id : 3,price : 2000,quantity : 1})
    .add({item_id : 4,price : 2000,quantity : 1})
    // .totalHarga()
    .addDisc(5)
    // .remove({item_id : 3})

    // console.log(cart)


// console.log(cart.total())
// console.log(cart.totalQty())
console.log(cart.totalHarga())
// cart.totalHarga()
// console.log(cart.showAll())
// cart.output()

