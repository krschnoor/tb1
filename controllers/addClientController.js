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


 
addAccount(collection,{name:"Cash",category:'Asset',class:"CurrentAsset",subtype:"Cash", csort:1,ssort:1, fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Receivable",category:'Asset',class:"CurrentAsset",subtype:"Accounts Receivable", csort:1,ssort:2, fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Current Receivables",category:'Asset',class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:3, fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due From Shareholder",category:'Asset',class:"CurrentAsset",subtype:"Other Receivables", csort:1,ssort:3, fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Marketable Securities",category:'Asset',class:"CurrentAsset",subtype:"Current Investments", csort:1,ssort:4, fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Inventory",category:'Asset',class:"CurrentAsset",subtype:"Inventory", csort:1, ssort:5,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Equipment",category:'Asset',class:"FixedAsset",subtype:"Equipment", csort:2, ssort:1,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Fixed Assets - Buildings",category:'Asset',class:"FixedAsset",subtype:"Buildings", csort:2, ssort:2,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accumulated Depreciation",category:'Asset',class:"FixedAsset",subtype:"Depreciation", csort:2, ssort:3,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Assets",category:'Asset',class:"Other Assets",subtype:"Other Assets", csort:3, ssort:1,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Intangible Assets",category:'Asset',class:"Other Assets",subtype:"Intangible Assets", csort:3, ssort:2,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Accounts Payable",category:'Liability',class:"CurrentLiability",subtype:"Accounts Payable", csort:4, ssort:1,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Due to Shareholder",category:'Liability',class:"CurrentLiability",subtype:"Due to Shareholder", csort:4, ssort:2,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Short Term Loans Payable",category:'Liability',class:"CurrentLiability",subtype:"Loans Payable", csort:4, ssort:3,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Payables",category:'Liability',class:"CurrentLiability",subtype:"Other Payables", csort:4, ssort:5,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Loans Payable",category:'Liability',class:"LongTermLiability",subtype:"Loans Payable", csort:5, ssort:1,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"ShareholderLoans Payable",category:'Liability',class:"LongTermLiability",subtype:"Shareholder Loans Payable", csort:5, ssort:2,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Other Long Term Payables",category:'Liability',class:"LongTermLiability",subtype:"Other Long Term Payables", csort:5, ssort:3,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Retained Earnings",category:'Equity',class:"Equity",subtype:"Retained Earnings", csort:6, ssort:1,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Owner's Draw",category:'Equity',class:"Equity",subtype:"Draws", csort:6, ssort:3,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})
addAccount(collection,{name:"Paid in Capital",category:'Equity',class:"Equity",subtype:"PaidInCapital", csort:6, ssort:2,fs:1,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})  
addAccount(collection,{name:"Sales",category:'Revenue',class:"Sales",subtype:"Sales", csort:1, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Fees for Services",category:'Revenue',class:"Fees",subtype:"Fees", csort:1, ssort:2,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Cost of Goods Sold",category:'CostOfGoodsSold',class:"CostOfGoodsSold",subtype:"Cost of Goods Sold", csort:2, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})      
addAccount(collection,{name:"Advertising",category:'Expense',class:"SellingExpense",subtype:"Advertising", csort:3, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Wages - Selling",category:'Expense',class:"SellingExpenses",subtype:"Wages", csort:3, ssort:2,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Payroll Taxes - Selling",category:'Expense',class:"SellingExpenses",subtype:"Payroll Tax", csort:3, ssort:3,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Marketing",category:'Expense',class:"SellingExpenses",subtype:"Marketing", csort:3, ssort:4,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Commissions",category:'Expense',class:"SellingExpenses",subtype:"Commissions", csort:3, ssort:4,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Travel - Selling",category:'Expense',class:"SellingExpenses",subtype:"Travel", csort:3, ssort:6,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Insurance - Selling",category:'Expense',class:"SellingExpenses",subtype:"Insurance", csort:3, ssort:7,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Lodging - Selling",category:'Expense',class:"SellingExpenses",subtype:"Lodging", csort:3, ssort:8,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Meals & Entertainment",category:'Expense',class:"SellingExpenses",subtype:"Meals", csort:3, ssort:9,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Communications Expense - Selling",category:'Expense',class:"SellingExpenses",subtype:"Communications", csort:3, ssort:10,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Supplies",category:'Expense',class:"SellingExpenses",subtype:"Supplies", csort:3, ssort:11,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Employee Benefits - Selling",category:'Expense',class:"SellingExpenses",subtype:"Employee Benefits", csort:3, ssort:12,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Wages - General",category:'Expense',class:"GeneralExpenses",subtype:"Wages", csort:4, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Payroll Taxes - General",category:'Expense',class:"GeneralExpenses",subtype:"Payroll Taxes", csort:4, ssort:2,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Insurance - General",category:'Expense',class:"GeneralExpenses",subtype:"Insurance", csort:4, ssort:3,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Repairs & Maintenance",category:'Expense',class:"GeneralExpenses",subtype:"Repairs", csort:4, ssort:4,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Supplies",category:'Expense',class:"GeneralExpenses",subtype:"Supplies", csort:4, ssort:5,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Travel & Lodging - General",category:'Expense',class:"GeneralExpenses",subtype:"Travel & Lodging", csort:4, ssort:6,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Fuel",category:'Expense',class:"GeneralExpenses",subtype:"Fuel", csort:4, ssort:7,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Small Tools",category:'Expense',class:"GeneralExpenses",subtype:"Small Tools", csort:4, ssort:8,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Professional Fees",category:'Expense',class:"GeneralExpenses",subtype:"Professional Fees", csort:4, ssort:9,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Dues & Subscriptions",category:'Expense',class:"GeneralExpenses",subtype:"Dues & Subscriptions", csort:4, ssort:10,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Licenses & Permits",category:'Expense',class:"GeneralExpenses",subtype:"Licenses & Permits", csort:4, ssort:11,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Other Taxes",category:'Expense',class:"GeneralExpenses",subtype:"Other Taxes", csort:4, ssort:12,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Depreciation",category:'Expense',class:"GeneralExpenses",subtype:"Depreciation", csort:4, ssort:13,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Employee Benefits - General",category:'Expense',class:"GeneralExpenses",subtype:"Employee Benefits", csort:4, ssort:14,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Other Income",category:'Revenue',class:"OtherIncome",subtype:"Other Income", csort:5, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Other Expense",category:'Expense',class:"OtherExpense",subtype:"Other Expense", csort:6, ssort:1,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Interest Expense",category:'Expense',class:"OtherExpense",subtype:"Interest Expense", csort:6, ssort:2,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     
addAccount(collection,{name:"Income Taxes",category:'Expense',class:"OtherExpense",subtype:"Income Tax", csort:6, ssort:3,fs:2,balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]})     


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