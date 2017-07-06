MongoClient = require('mongodb').MongoClient;
var newDB;


exports.addClient = function(req,res){

MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){
 
 //db.admin().listDatabases(function(err,list){
  // if(list.indexOf(req.body.clientName)>=0)
    //{db.close()}
    //})




var tbmonth = req.body.month
var tbday = req.body.day
var tbyear = req.body.year

newDB = db.db(req.body.clientName)
 
newDB.dropCollection("accounts")
newDB.createCollection("accounts", function(err,collection){
 
addAccount(collection,{name:"Cash",class:"CurrentAsset",subtype:"Cash", csort:1,ssort:1, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Receivable",class:"CurrentAsset",subtype:"Accounts Receivable", csort:1,ssort:1, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Current Receivables",class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:2, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due From Shareholder",class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:2, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Marketable Securities",class:"CurrentAsset",subtype:"Current Investments", csort:1,ssort:3, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Inventory",class:"CurrentAsset",subtype:"Inventory", csort:1, ssort:4,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Equipment",class:"FixedAsset",subtype:"Equipment", csort:2, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Buildings",class:"FixedAsset",subtype:"Buildings", csort:2, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accumulated Depreciation",class:"FixedAsset",subtype:"Depreciation", csort:2, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Assets",class:"Other Assets",subtype:"Other Assets", csort:3, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Intangible Assets",class:"Other Assets",subtype:"Intangible Assets", csort:3, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Payable",class:"CurrentLiability",subtype:"Accounts Payable", csort:4, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due to Shareholder",class:"CurrentLiability",subtype:"Due to Shareholder", csort:4, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Short Term Loans Payable",class:"CurrentLiability",subtype:"Loans Payable", csort:4, ssort:3,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Payables",class:"CurrentLiability",subtype:"Other Payables", csort:4, ssort:5,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Loans Payable",class:"LongTermLiability",subtype:"Loans Payable", csort:5, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"ShareholderLoans Payable",class:"LongTermLiability",subtype:"Shareholder Loans Payable", csort:5, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Long Term Payables",class:"LongTermLiability",subtype:"Other Long Term Payables", csort:5, ssort:3,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Retained Earnings",class:"Equity",subtype:"Retained Earnings", csort:6, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Partner Draw",class:"Equity",subtype:"Draws", csort:6, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
  

  })


newDB.dropCollection("clientinfo")
newDB.createCollection("clientinfo", function(err,collection){ 

 collection.insert({name:req.body.clientName,fye:[ new Date(tbyear,tbmonth-1,tbday)]},function(err,result){})

   
})


newDB.dropCollection("entries")
newDB.createCollection("entries", function(err,collection){ 

//if(!err)
//{res.json(200,collection);}
 
//else{
//res.json(500,{error: err})}    
             

 })



 })


}

function addAccount(collection, object)
{

 collection.insert(object,function(err,result){
  if(!err){
  console.log("inserted:")
  console.log(result)}
   
      
 

 })

}