const mongoDb = require("mongodb");

const {getDb} = require("../util/database");

const ObjectId = mongoDb.ObjectId;

class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  };


  addUser(){
    const db = getDb();
    return db.collection("users").insertOne(this)
    .then(() => console.log("user added"))
    .catch(() => console.log("Something went wrong"))
  };

  static findUserById(userId){
    const db = getDb();
    return db.collection("users").find({_id :new ObjectId(userId) }).next()
    .then(user => user)
    .catch(() => console.log("Something went wrong"))
  };
}



module.exports = User;
