
var mongoose = require('mongoose');
MongoClient = require('mongodb').MongoClient;
var newDB;


var Account = mongoose.model('Account')

exports.getAccounts = function(req,res){

 var query = Account.find().sort({csort:1,ssort:1} )
 query.exec(function(err,accounts){
    if(!accounts){
    res.json(404,{msg:'Accounts not Found'})}
    else{
    res.json(accounts)}

  } )

}





exports.addAccount = function(req,res){

MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){
 
 

newDB = db.db(req.body.client)
var account = req.body.account

 var collection = newDB.collection('accounts')

   collection.insert(account,function(err,result){
     if(!err){

       console.log(result)
       res.json(200,result);
       newDB.close()
     }
     else{
       console.log(err)
     }
   })

console.log(account)


 })

}



exports.updateChart = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.body.client)

 var accounts  = req.body.accounts

 var collection = mydb.collection('accounts');

 
  for(var ctr= 0;ctr<accounts.length;ctr++){
 
  var id = require('mongodb').ObjectID(accounts[ctr]._id)
  

  
   collection.update({'_id' : id}, {'$set':{ 'ssort' : accounts[ctr].ssort}},function(err,result){
             if(!err){
              console.log('logging update ssort result' + result)
               res.send(200)
                }

             else{
               console.log('err is ' + err)
               res.send(err);
              }

            })
            

    collection.update({'_id' : id}, {'$set':{'balances' : accounts[ctr].balances}},function(err,result){
             if(!err){
               console.log('logging update ssort result' + result)
               res.send(200)
                }

             else{
               console.log('err is ' + err)
               res.send(err);
              }

            })
 


            
            
  }
  
  res.json(200,{})
  
 })
mydb.close()
}

