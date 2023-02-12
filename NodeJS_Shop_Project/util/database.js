const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect("mongodb+srv://ananth:Naimisha%401999@cluster0.gtxma2y.mongodb.net/shop?retryWrites=true&w=majority")
    .then(client => {
        console.log("connected!");
        _db = client.db();
        callback()
    })
    .catch(err => {
        console.log(err)
    })
};


const getDb = () => {
    if(_db){
        return _db;
    }
    throw "Database not found"
};


module.exports = {
    mongoConnect,
    getDb
}