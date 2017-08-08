var MongoClient = require('mongodb').MongoClient;
ObjectID = require('mongodb').MongoClient.ObjectID

exports.addEntry = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.body.client)

 var ajeObj = {aje:[]}

 ajeObj.aje = req.body.entry

 var collection = mydb.collection('entries');

 

 collection.insert(ajeObj,function(err,result){
           if(!err){
              
             console.log("inserted 2" + result[0].aje[0].accountID)
             for(var ctr = 0;ctr<result.length;ctr++){
               for(var ctr2=0;ctr2<result[ctr].aje.length;ctr2++)
                  {result[ctr].aje[ctr2].ajeid = result[ctr]._id}}
             collection.save(result[0],{w:1},function(err,results){console.log(results)})
             res.json(200,result);
             mydb.close()}

             else{res.send(err);
             mydb.close()}

              })
            
            
 
  
 })

}


exports.addEntryEdit = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.body.client)

 aje = req.body.entry

 var collection = mydb.collection('entries');

 var id = require('mongodb').ObjectID(req.body.id)
 

 collection.update({'_id' : id}, {'$set':{'aje' : aje}},function(err,result){
           if(!err){
              
            res.json(result);
             mydb.close()}

             else{res.send(err);
             mydb.close()}

              })
            
            
 
  
 })

}






exports.getAjes = function(req,res){
 
 MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.query.db)

 
 var collection = mydb.collection('entries');

 
    collection.find().toArray(function(err, ajes) {
        if(!err){
        var retArr = [];
        
         for(var ctr = 0;ctr<ajes.length;ctr++) { 
                    
             for(ctr2=0;ctr2<ajes[ctr].aje.length;ctr2++) {
              retArr.push(ajes[ctr].aje[ctr2])
             }
          }

        res.json(200,retArr)
        console.log(ajes) //ajes comes here.
        db.close()}
    });    
 
            
 
  
 })

}



exports.getAje = function(req,res){
 
 MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.query.db)
 var id = require('mongodb').ObjectID(req.query.id)
 
 if(id!==null || id!= indefined || id!=''){
 var collection = mydb.collection('entries');

 
    collection.findOne({'_id' : id},function(err, aje) {
        if(!err){
          console.log(id)
          console.log(aje.aje)
        var retArr = [];
         
         for(var ctr = 0;ctr<aje.aje.length;ctr++) { 
                    
                       retArr.push(aje.aje[ctr])
                      }

        res.json(200,retArr)
        console.log(retArr) //ajes comes here.
        db.close()}
    });    
 
 }           
 
  
 })

}



