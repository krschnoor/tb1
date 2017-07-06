MongoClient = require('mongodb').MongoClient;
var newDB;


exports.addClient = function(req,res){

MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){
 
 
var tbmonth = req.body.month
var tbday = req.body.day
var tbyear = req.body.year

newDB = db.db(req.body.clientName)
 
newDB.dropCollection("accounts")
newDB.createCollection("accounts", function(err,collection){

//if(!err)
   // {res.json(collection)}
    // db.close()}
    //else
    //{res.json({error:err})}
 
addAccount(collection,{name:"Cash",category:'Asset',class:"CurrentAsset",subtype:"Cash", csort:1,ssort:1, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:678,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Receivable",category:'Asset',class:"CurrentAsset",subtype:"Accounts Receivable", csort:1,ssort:2, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:56700,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Current Receivables",category:'Asset',class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:3, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due From Shareholder",category:'Asset',class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:3, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Marketable Securities",category:'Asset',class:"CurrentAsset",subtype:"Current Investments", csort:1,ssort:4, fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Inventory",category:'Asset',class:"CurrentAsset",subtype:"Inventory", csort:1, ssort:5,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Equipment",category:'Asset',class:"FixedAsset",subtype:"Equipment", csort:2, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:12000,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Buildings",category:'Asset',class:"FixedAsset",subtype:"Buildings", csort:2, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accumulated Depreciation",category:'Asset',class:"FixedAsset",subtype:"Depreciation", csort:2, ssort:3,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Assets",category:'Asset',class:"Other Assets",subtype:"Other Assets", csort:3, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Intangible Assets",category:'Asset',class:"Other Assets",subtype:"Intangible Assets", csort:3, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Payable",category:'Liability',class:"CurrentLiability",subtype:"Accounts Payable", csort:4, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due to Shareholder",category:'Liability',class:"CurrentLiability",subtype:"Due to Shareholder", csort:4, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Short Term Loans Payable",category:'Liability',class:"CurrentLiability",subtype:"Loans Payable", csort:4, ssort:3,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Payables",category:'Liability',class:"CurrentLiability",subtype:"Other Payables", csort:4, ssort:5,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Loans Payable",category:'Liability',class:"LongTermLiability",subtype:"Loans Payable", csort:5, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"ShareholderLoans Payable",category:'Liability',class:"LongTermLiability",subtype:"Shareholder Loans Payable", csort:5, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Long Term Payables",category:'Liability',class:"LongTermLiability",subtype:"Other Long Term Payables", csort:5, ssort:3,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Retained Earnings",category:'Equity',class:"Equity",subtype:"Retained Earnings", csort:6, ssort:1,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Partner Draw",category:'Equity',class:"Equity",subtype:"Draws", csort:6, ssort:2,fs:"BS",balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
  
     

  }) 

 })

addClientInfo(req,res)
addEntries(req,res)

res.send(200)


}


function addClientInfo(req,res){

console.log("called Info")

var tbmonth = req.body.month
var tbday = req.body.day
var tbyear = req.body.year

MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
newDB = db.db(req.body.clientName)
newDB.dropCollection("clientinfo")
newDB.createCollection("clientinfo", function(err,collection){ 
 
  collection.insert({name:req.body.clientName,fye:[ new Date(tbyear,tbmonth-1,tbday)]},function(err,result)
   {
    if(!err){return}
   })

 })
   
})

return
}


function addEntries(req,res){

MongoClient.connect("mongodb://127.0.0.1:27017/" + req.body.clientName, function(err,db){

newDB.dropCollection("entries")
newDB.createCollection("entries", function(err,collection){ 
   if(!err)
   {return}
 
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