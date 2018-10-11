const Datastore = require('nedb')

class NedbClass{
        constructor(){
                this.db =new Datastore({filename: 'new.txt',autoload:true});
            }
            addMethode(){
        let doc = { nama: 'mas maul',asal_kota: 'merauke' };
        this.db.insert(doc, function (err, newDoc) {   
    });

        }
        UpdateMethode(){
        this.db.update({ nama: 'adiguna' },{$set:{ nama: 'marco'}},{ multi: true }, function (err, numReplaced) {
              });
        }
        removeMethode(){
            this.db.remove({ nama: 'marco' }, { multi: true }, function (err, numRemoved) {
              });
        }
        findMethode(){
            this.db.find({ nama: 'marco' }, function (err, docs) {
              });
        }
    }
let run = new NedbClass();
run.RemoveMethode();