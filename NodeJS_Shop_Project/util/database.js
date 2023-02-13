const mongodb = require("mongodb");

require("dotenv").config();

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect(process.env.MONGO_DB)
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