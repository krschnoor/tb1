MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/GoodYear", function(err, db) {
  if(err) { return console.dir(err); }


// add new fye

   var collection = db.collection('clientinfo');
   var now = new Date(2018, 11, 31);
   collection.findOne({name:'GoodYear'},function(err, info) {
    //console.log(info)
      info.fye.push(now)
      //for(ctr = 0;ctr <account.balances.length;ctr++)
      //  { 
       // if(account.balances[ctr].tbyear == 2017)
         // {console.log("lpppppp");
         //account.balances[ctr].unadjbal = 650000}
      // }

         
    collection.save(info,{w:1},function(err,results){console.log(results)})
      
   //console.log(info)

   db.close()
    
    
  })



})

//Person.update({'items.id': 2}, {'$set': {
  //  'items.$.name': 'updated item2',
    //'items.$.value': 'two updated'
//}}, function(err) { ...