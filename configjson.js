const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

class Lowclass{
    constructor(){
        const adapter = new FileSync('ini.json')
        this.db = low(adapter)
        // Set some defaults (required if your JSON file is empty)
    }
    defaultMethode(){
        this.db.defaults({ posts: []})
        .write()
    }    
    addMethode(){
        this.db.get('posts')
        .push({ id: 4, nama: 'wawan',asal_kota:'bali'})
        .write()
    }
    removeMethode(){
        this.db.get('posts')
        .remove({nama:"wawan"},{asala_kota:"bali"})
        .write()
    }
    UpdateMethode(){
        this.db.get('posts')
        .find({ nama: 'wawan' },{asal_kota:'london'})
        .assign({ nama: 'messi'},{asal_kota:'argentina'})
        .write()
    }
}

run = new Lowclass();
run.removeMethode();