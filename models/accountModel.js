var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var accountSchema = new Schema({
name: {type: String, index:1,required:true},
class: {type: String},
subtype: {type: String},
csort: {type: Number},
ssort: {type: Number},
fs: {type: String},
balances:[]},{collection:'accounts'});
mongoose.model('Account',accountSchema);
exports.accountSchema = accountSchema;
//console.log("required paths")
//console.log(accountSchema.requiredPaths());
//console.log("indexes");
//console.log(accountSchema.indexes());


