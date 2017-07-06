MongoClient = require('mongodb').MongoClient;
var newDB;


var tbmonth = 12
var tbday = 31
var tbyear = 2017

MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
newDB = db.db('UUU')
newDB.dropCollection("clientinfo")
newDB.createCollection("clientinfo", function(err,collection){ 
 
  collection.insert({name:"UUU",fye:[ new Date(tbyear,tbmonth-1,tbday)]},function(err,result){})

 })
   
})