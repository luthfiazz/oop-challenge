const fetch = require('node-fetch');
const http =require('http'); 
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

class httpClass{
    static getData(){
        const data = 'https://jsonplaceholder.typicode.com/posts'
        const getdata =data;
        
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            port: 80,
            path: '/posts',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(getdata)
            }
        };
        
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
        
        // write data to request body
        req.write(getdata);
        req.end();
    }
    static getHeader(){
        const data = 'https://jsonplaceholder.typicode.com/posts'
        const getdata =data;
        
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            port: 80,
            path: '/posts',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(getdata)
            }
        };
        
        const req = http.request(options, (res) => {
            // console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers.date)}`);
            res.setEncoding('utf8');
            // res.on('data', (chunk) => {
            //   console.log(`BODY: ${chunk}`);
            // });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
        
        // write data to request body
        req.write(getdata);
        req.end();
    }
    static postData(){
        const adapter = new FileSync('db.json')
        this.db = low(adapter)
        // Set some defaults (required if your JSON file is empty)
        this.db.defaults({ posts: []})
        .write()
        this.db.get('posts')
        .push({ id: 1, nama: 'wawan',asal_kota:'aceh'})
        .write()
    }
    static putData(){  
        const adapter = new FileSync('db.json')
        this.db = low(adapter)
        // Set some defaults (required if your JSON file is empty)
        this.db.defaults({ put: []})
        .write()
        this.db.get('posts')
        .find({ nama: 'wawan' },{asal_kota:'london'})
        .assign({ nama: 'messi'},{asal_kota:'argentina'})
        .write()
    }
    static getFetch(){

        return fetch('http://httpbin.org/post')    
        
     }
     static postFetch(){
    const body = { a: 1 };
    return fetch('http://httpbin.org/post', { 
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })

}
    static putFetch(){
    const body = {a:1};
    return fetch('https://jsonplaceholder.typicode.com/posts/1', { 
        method: 'PUT',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
}
    static deleteFetch(){
        const body = { a: 1 };
        return fetch('http://httpbin.org/post', { 
            method: 'DELETE'
        })
    }
    static patchFetch(){
    const body = { a: 1 };
    return fetch('http://httpbin.org/post', { 
        method: 'PATCH',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
}
    
    
static deleteData(){
    const adapter = new FileSync('db.json')
    this.db = low(adapter)
    // Set some defaults (required if your JSON file is empty)
    this.db.defaults({ posts: []})
    .write()
    
    this.db.get('posts')
    .remove({nama:"wawan"},{asal_kota:"aceh"})
    .write()
}
static option(){
    db.read()
    console.log('state has been update')
}

}
// httpClass

// result.getData();
// result.getHeader();
// result.postData();
// result.putData();
// result.getDataFetch();
httpClass.postFetch();
// result.deleteData();
// result.option();

const run = httpClass.postFetch().then(res => res.json())
console.log(run);






