var express = require('express');
module.exports = function(app){
var accounts = require('./controllers/accountController.js')
var client = require('./controllers/addClientController.js')
var clients = require('./controllers/clientsController.js')
var entry = require('./controllers/ajeController.js')

app.use('/static',express.static('./static'))
app.use('/lib',express.static('../lib'))

app.get('/', function(req,res){
res.render('home.html')})

app.get('/clients/get',clients.getClients);
app.get('/client/get',clients.getClient);
app.get('/clientinfo/get',clients.getClientInfo);
app.get('/accounts/get',accounts.getAccounts);
app.post('/newclient',client.addClient);
app.post('/adjBalances',accounts.updateChart);
//app.post('/newclient/addInfo',client.addClientInfo);
//app.post('/newclient/addEntry',client.addEntries);
app.post('/newAccount',accounts.addAccount);
app.post('/newEntry',entry.addEntry);
app.post('/newEntryEdit',entry.addEntryEdit);
app.get('/ajes/get',entry.getAjes);
app.get('/aje/get',entry.getAje);

}

//app.get('/accounts/get', function(req,res){
//res.json({name:"hello"})})
//console.log(app + "all good")



