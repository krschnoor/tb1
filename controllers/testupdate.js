var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db("BraceInc")



 aje = []

console.log(aje)

 var collection = mydb.collection('entries');

 var id = require('mongodb').ObjectID('595ffed6235724b82c7426fc')
 

 collection.update({'_id' : id}, {'$set':{'aje' : aje}},function(err,result){
           if(!err){
              console.log(result)
             //res.json(200,result);
             mydb.close()

              }

            // else{res.send(err);
           //  mydb.close()}

              })
            
            
 
  
 })
