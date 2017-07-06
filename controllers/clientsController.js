var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Account = mongoose.model('Account')


exports.getClients = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){
 var adminDB = db.admin();

 adminDB.listDatabases(function (err,databases){
   res.json(databases)
   db.close()
  })



})


}


exports.getClient = function(req,res){
 
 var db = req.query.db

 MongoClient.connect("mongodb://127.0.0.1:27017/" + db, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('accounts');

    collection.find().sort({csort:1,ssort:1} ).toArray(function(err, accounts) {
        res.json(accounts) //accounts comes here.
        db.close()
    });    
});

}



exports.getClientInfo = function(req,res){
 
 var db = req.query.db

 MongoClient.connect("mongodb://127.0.0.1:27017/" + db, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('clientinfo');

    collection.find().toArray(function(err, info) {
        res.json(info) //accounts comes here.
        db.close()
    });    
});

}
