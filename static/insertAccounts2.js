var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Chuck", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
           db.dropCollection("accounts");

           db.createCollection("accounts",function(err,coll){})           

           var dt = new Date(2016,11,31)
            var dt2 = new Date(2015,11,31)


            var collection = db.collection('accounts');
            collection.insert({name:"Accounts Receivable", category:"Asset", class:"CurrentAsset",subclass:"AccountsReceivable",csort:2,ssort:1,balances:[
                               {unadjbal:25000,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){})
           
})