var mongoose = require('mongoose');

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


  