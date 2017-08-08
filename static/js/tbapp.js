var app = angular.module('TrialBalance',[])


app.directive('focus', function() {
  return {
    restrict: 'A',
    link: function($scope,elem,attrs) {
    
      elem.bind('keydown', function(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
          e.preventDefault();
          elem.parent("td").next().find("input").focus(); 
        }
      });
    }
  }
});





app.directive('nextrow', function () {
    return {
        restrict: 'A',
        link: function ($scope, selem, attrs) {
            selem.bind('keydown', function (e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    e.preventDefault();
                    var pageElems = angular.element(document).find('input,select')
                    elem = $scope.clickedElement
                    focusNext = false,
                     len = pageElems.length; 
                        
                    for (var i = 0; i < len; i++) { 
                        
                        if (focusNext) {
                            
                                pageElems[i].focus()
                                break;
                            
                        } else if (pageElems[i].id == elem) {
                            focusNext = true;
                        }  
                    } 
                } 
            });
        }
    }
})



app.controller('TBcontroller', ['$scope','$http','$location','$timeout','ajeservice',function($scope,$http,$location,$timeout,ajeservice){

  $scope.accounts;
  $scope.currentAccount;
  $scope.newclient = {};
  $scope.currentfye ;
  
  $scope.openclient;
  $scope.openclientfyes = [];
  $scope.ajeList 
  

  $scope.ajeEdit 
  
   

  $scope.postAjeEdit = function(){

   ajeservice.postAjeEdit($scope)
  
  }
   

  $scope.postAje = function() {
            
   if($scope.ajeform.$valid){
   ajeservice.postAje($scope)}

  }
    

$scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" media="all" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
      }



  

   $scope.addAccount = function(cat,cls,sub,ssort,name){
   
   var csort, fs;
   

    if(cls=='CurrentAsset'){
      csort = 1;
      fs = 1 }

    else if(cls=='FixedAsset'){
      csort = 2;
      fs = 1
    }

   else if(cls=='Other Assets'){
      csort = 3;
      fs = 1
    }

   else if(cls=='CurrentLiability'){
      csort = 4;
      fs = 1
    }

    else if(cls=='LongTermLiability'){
      csort = 5;
      fs = 1
    }

    else if(cls=='Equity'){
      csort = 6;
      fs = 1
    }

   else if(cls=='Sales'){
      csort = 1;
      fs = 2
    }

  else if(cls=='Fees'){
      csort = 1;
      fs = 2
    }

  else if(cls=='CostOfGoodsSold'){
      csort = 2;
      fs = 2
    }

  else if(cls=='SellingExpenses'){
      csort = 3;
      fs = 2
    }


 else if(cls=='GeneralExpenses'){
      csort = 4;
      fs = 2
    }

  else if(cls=='OtherIncome'){
      csort = 5;
      fs = 2
    }

  else if(cls=='OtherExpense'){
      csort = 6;
      fs = 2
    }



    var tbday = $scope.currenttbday;
    var tbmonth = $scope.currenttbmonth;
    var tbyear = $scope.currenttbyear;




    var acct = {
              name:name,
              category:cat,
              class: cls,
              subtype:sub, 
              csort: parseInt(csort),
              ssort: parseInt(ssort),
              fs:fs, 
              balances:[{tbmonth:tbmonth,tbday:tbday,tbyear:tbyear,unadjbal:0,entries:[],adjbal:0}]
              }

        
   $http.post('/newAccount/',{account:acct,client:$scope.openclient[0].name})
   .success(function(data,status,headers,config){
   alert("Account " + name + " Created Successfully.")
   $scope.accounts.push(data[0]);
   $scope.setContent('start.html');
   })
  
   
  
}



 $scope.getChartBegBalances = function(){
 
  var totUnadj = 0
 
   for(var ctr = 0;ctr<$scope.accounts.length;ctr++){

   var balArr = $scope.accounts[ctr].balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&  (balance.tbday == $scope.currenttbday) 
     && (balance.tbmonth == $scope.currenttbmonth)) })
 
     if($scope.accounts[ctr].category=="Asset" || $scope.accounts[ctr].category=='Expense' || $scope.accounts[ctr].category=='CostOfGoodsSold'){
       totUnadj += balArr[0].unadjbal}
       else{
         totUnadj -= balArr[0].unadjbal
       }
    

     }

  return parseFloat(totUnadj) || 0

}


$scope.postChart = function(){

  
  $http.post('/adjBalances/',{accounts:$scope.accounts,client:$scope.openclient[0].name})
   .success(function(data,status,headers,config){
   
   $scope.setContent('start.html')})
   $scope.setContent('start.html')

  }



   
  $scope.setCurrentFye = function(ye){
  $scope.currentfye = new Date(ye)
  $scope.currenttbyear = $scope.currentfye.getYear() + 1900
  $scope.currenttbday = $scope.currentfye.getDate() 
  $scope.currenttbmonth = $scope.currentfye.getMonth() + 1
  $scope.currentfye = ye;
  $scope.setContent('start.html')}

  $scope.setAccount = function(acct){
  $scope.currentAccount = acct}
  $scope.content;
  
    
  $scope.setContent = function(page){ 
     
     if(page=='aje.html' || page =='ajeedit.html'){
       setJournalEntry($scope)
      }
     if(page=='classBalanceSheet.html' || page=='classIncomeStatement.html'
      || page=='standardTrialBalance.html'){
      setReports($scope)
     }
 
      $scope.content = '/static/' +   page
  }

 
 $scope.addClient = function() {
  

  if($scope.clientform.$valid){
 
   var d = new Date($scope.newclient.fye);
   var m = d.getMonth() + 1; 
   var dy = d.getDate() + 1 
   var y = d.getYear() + 1900; 
  
    $http.post('/newclient',{clientName:$scope.newclient.name,month:m,day:dy,year:y}).success(function                  (data,status,headers,config){
   
           $scope.client = data;
    
           alert("New " + $scope.newclient.name + " Account Created.")
    
          
            }).error(function(data,status,headers,config){  })
  
   }

 }


 
 $scope.getClients = function(){
 
 $http.get('/clients/get').success(function(data,status,headers,config){
   $scope.clients = data.databases
   $scope.setContent('clientlist.html')
   }).error(function(data,status,headers,config){    })
 

  }


 $scope.openClient = function(name){
 
 $http.get('/client/get',{params:{db:name}}).success(function(data,status,headers,config){
   $scope.accounts = null
   $scope.currentfye = null
   $scope.openclient = null
   $scope.openclientfyes = []
   $scope.accounts = data
   $scope.getClientInfo(name)
   $scope.getAjes(name)
   //$scope.postAje()
   
   }).error(function(data,status,headers,config){    })
 




  }

 $scope.getClientInfo = function(name){

  $http.get('/clientinfo/get',{params:{db:name}}).success(function(data,status,headers,config){
   $scope.openclient = data
   $scope.openclientfyes = data[0].fye
   $scope.setContent('openclient.html')
   }).error(function(data,status,headers,config){    })

}


 
 $scope.getAjes = function(name){
  $http.get('/ajes/get',{params:{db:name}}).success(function(data,status,headers,config){
    
  
  $scope.ajeList = data;  


      }).error(function(data,status,headers,config){   })

  }


  $scope.getAje = function(name,id){
  $http.get('/aje/get',{params:{db:name, id:id}}).success(function(data,status,headers,config){
  
   
   $scope.ajeEdit = data
   console.log(data)
   $scope.setContent('ajeedit.html')
   
    }).error(function(data,status,headers,config){   })

  }

  }])
   