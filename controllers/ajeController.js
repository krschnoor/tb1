var MongoClient = require('mongodb').MongoClient;

exports.addEntry = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.body.client)

 var ajeObj = {aje:[]}

 ajeObj.aje = req.body.entry

 var collection = mydb.collection('entries');

 

 collection.insert(ajeObj,function(err,result){
           if(!err){
              console.log("inserted " + result)
              res.json(200,result);
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






