var MongoClient = require('mongodb').MongoClient;


function addAccount(collection, object,newDB)
{

collection.insert(object,function(err,result){
 if(!err){
 console.log("inserted:")
 console.log(result)
}
 
      
      addBalance(result)
   

      collection.save(result[0],{w:1},function(err,results){})

     
     
})


}


function addBalance(acct)
{

  
MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){

var tbmonth = 12
var tbday = 31
var tbyear = 2017

var balance = {acctid:acct[0]._id,tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}

var newDB = db.db("TrialBalance")


   newDB.collection("balances").insert(balance,function(err,result){

   newDB.collection("accounts").findOne({_id:acct[0]._id},function(err,doc){
   doc.balances.push(result[0])  
   newDB.collection("accounts").save(doc,{w:1},function(err,results){})    })
   
   })

 })

}



MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,db){
//console.log("this is your error: " + err)
var adminDB = db.admin();
adminDB.listDatabases(function(err,databases){
//console.log(databases)

var newDB = db.db("TrialBalance")

newDB.dropCollection("accounts")
newDB.dropCollection("balances")
newDB.createCollection("balances", function(err,collection){})
newDB.createCollection("accounts", function(err,collection){

addAccount(collection,{name:"Cash",class:"CurrentAsset",subtype:"Cash", csort:1,ssort:1, fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Accounts Receivable",class:"CurrentAsset",subtype:"Accounts Receivable", csort:1,ssort:1, fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Other Current Receivables",class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:2, fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Due From Shareholder",class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:2, fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Marketable Securities",class:"CurrentAsset",subtype:"Current Investments", csort:1,ssort:3, fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Inventory",class:"CurrentAsset",subtype:"Inventory", csort:1, ssort:4,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Fixed Assets - Equipment",class:"FixedAsset",subtype:"Equipment", csort:2, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Fixed Assets - Buildings",class:"FixedAsset",subtype:"Buildings", csort:2, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Accumulated Depreciation",class:"FixedAsset",subtype:"Depreciation", csort:2, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Other Assets",class:"Other Assets",subtype:"Other Assets", csort:3, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Intangible Assets",class:"Other Assets",subtype:"Intangible Assets", csort:3, ssort:2,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Accounts Payable",class:"CurrentLiability",subtype:"Accounts Payable", csort:4, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Due to Shareholder",class:"CurrentLiability",subtype:"Due to Shareholder", csort:4, ssort:2,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Short Term Loans Payable",class:"CurrentLiability",subtype:"Loans Payable", csort:4, ssort:3,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Other Payables",class:"CurrentLiability",subtype:"Other Payables", csort:4, ssort:5,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Loans Payable",class:"LongTermLiability",subtype:"Loans Payable", csort:5, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"ShareholderLoans Payable",class:"LongTermLiability",subtype:"Shareholder Loans Payable", csort:5, ssort:2,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Other Long Term Payables",class:"LongTermLiability",subtype:"Other Long Term Payables", csort:5, ssort:3,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Retained Earnings",class:"Equity",subtype:"Retained Earnings", csort:6, ssort:1,fs:"BS",balances:[]},newDB)
addAccount(collection,{name:"Partner Draw",class:"Equity",subtype:"Draws", csort:6, ssort:2,fs:"BS",balances:[]},newDB)

})


 
//console.log(databases)


})})

