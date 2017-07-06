MongoClient = require('mongodb').MongoClient
    
// this will be controller to close period and add new fiscal year

MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('accounts');
            collection.find().toArray(function (err, items) {
                for(ctr=0;ctr<items.length;ctr++)
                {items[ctr].balances.push({tbmonth:06,tbday:30,tbyear:2018,unadjbal:34000,entries:[],adjbal:0})
                collection.save(items[ctr],{w:1},function(err,results){console.log(results)}) }
                }
            );
        });



MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('clientinfo');
            collection.find().toArray(function (err, items) {
                for(ctr=0;ctr<items.length;ctr++)
                {items[ctr].fye.push(new Date(2018,05,30))
                collection.save(items[ctr],{w:1},function(err,results){console.log(results)}) }
                }
            );
        });


