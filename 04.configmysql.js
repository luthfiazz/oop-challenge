let mysql = require('mysql');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Datastore = require('nedb')

class ConfigMysql {
    constructor(connection){
        this.mysqlconection = mysql.createConnection({
            host: "localhost",
            user: "luthfi",
            password: "123",
            database: "penjualan"
        });
        this.mysqlconection.connect()
    }
    AddData(){
        let newdata = {nama:'luthfi',asal_kota: 'barcelona'}
        this.mysqlconection.query('INSERT INTO `barang` SET?',newdata, function (error, results, fields) {
            if (error) throw error;
            console.log('Insert ', results);
        })
        this.mysqlconection.end();
    }
    GetData(){
        this.mysqlconection.query('SELECT * FROM barang',function (error, results, fields){
            if(error) throw error;
            console.log('Select',results);
        });
        this.mysqlconection.end();
    }
    Removedata(){
        this.mysqlconection.query('DELETE FROM barang WHERE id="23"',function(error,results,field){
            if(error) throw error;
            console.log('deleted',results);
        });
        this.mysqlconection.end();
    }
    UpdateData(){
        this.mysqlconection.query('UPDATE barang SET nama ="jonathan",asal_kota = "palembang" WHERE id ="21"',function(error,results,field){
            if(error) throw error;
            console.log(results.affectedRows + " record(s) updated");
        });
        this.mysqlconection.end();
    }
}

class ConfigNedb{
    constructor(){
            this.db =new Datastore({filename: 'config.txt',autoload:true});
        }
    AddData(){
    let doc = { nama: 'mark',asal_kota: 'lombok' };
    this.db.insert(doc, function (err, newDoc) {   
});

    }
    UpdateData(){
    this.db.update({ nama: 'mas maul' },{$set:{ nama: 'marco'}},{ multi: true }, function (err, numReplaced) {
          });
    }
    RemoveData(){
        this.db.remove({ nama: 'marco' }, { multi: true }, function (err, numRemoved) {
          });
    }
    SelectData(){
        this.db.find({ nama: 'marco' }, function (err, docs) {
          });
    }
}
class ConfigFileStorage{
    constructor(){
        const adapter = new FileSync('config.json')
        this.db = low(adapter)
        // Set some defaults (required if your JSON file is empty)
    }
    defaultMethode(){
        this.db.defaults({ posts: []})
        .write()
    }    
    AddData(){
        this.db.get('posts')
        .push({ id: 4, nama: 'wawan',asal_kota:'bali'})
        .write()
    }
    Removedata(){
        this.db.get('posts')
        .remove({nama:"wawan"},{asala_kota:"bali"})
        .write()
    }
    UpdateData(){
        this.db.get('posts')
        .find({ nama: 'luthfi' },{asal_kota:'bali'})
        .assign({ nama: 'messi'},{asal_kota:'argentina'})
        .write()
    }
}
class Config{
    constructor(koneksi){
       this.connection = koneksi
    }
    get(){
        return this.connection.GetData()
    }
    add(){
        this.connection.AddData()
    }
    update(){
        this.connection.UpdateData()
    }
    remove(){
        this.connection.RemoveData()
    }
}

const configDb = new Config(new ConfigNedb('config.txt')) 
// const connection = {username: 'luthfi', password: '123', db: 'penjualan'}
// const config = new Config(new ConfigFileStorage('config.json'))
// const configMysql= new Config(new ConfigMysql(connection))

// config.add()
// config.remove()
// config.update()

// configDb.get()
// configDb.add()
configDb.update()
// configDb.remove()



// configMysql.get()
// configMysql.add()
// configMysql.update()
// configMysql.remove()