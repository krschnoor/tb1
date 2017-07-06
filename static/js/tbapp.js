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



app.controller('TBcontroller', ['$scope','$http','$location','$timeout',function($scope,$http,$location,$timeout){

  $scope.accounts;
  $scope.currentAccount;
  $scope.newclient = {};
  $scope.currentfye ;
  
  $scope.openclient;
  $scope.openclientfyes = [];
  $scope.ajeList 
  
  

  $scope.aje = [{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
  {accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
  {accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
  {accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""}]

  $scope.postAje = function()
  {
   for(var ctr=0;ctr<$scope.aje.length;ctr++)
    { var obj = $scope.aje[ctr]
     $scope.ajeList.push(obj)}
   
   if($scope.ajeform.$valid){
   

   
   $http.post('/newEntry/',{entry:$scope.aje,client:$scope.openclient[0].name})
   .success(function(data,status,headers,config){
  
    
    $scope.clearAje()  

    })
   .error(function(data,status,headers,config){ })
   
   }}
    

 $scope.clearAje = function()
  {

  
    
      for(var ctr=$scope.aje.length-1;ctr>=0;ctr--)
      { $scope.aje.splice([ctr],1)}
     
      $scope.aje.splice(0, 0,{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""});
      $scope.aje.splice(0, 0,{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""});
      $scope.aje.splice(0, 0,{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""});
      $scope.aje.splice(0, 0,{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""});

  }
  

  
  $scope.deleteLine = function(index){
  $scope.aje.splice(index,1); }
 
  $scope.addLine = function(index){
  $scope.aje.splice(index, 0,{accountID:"",tbdate:$scope.currentfye,desc:"",debit:0,credit:0});}
  


   $scope.totalAjeDr = function(){
    var total = 0 
    for(ctr=0;ctr<$scope.aje.length;ctr++)
    { total += parseFloat($scope.aje[ctr].debit) || 0}
    return (total) }   

   $scope.totalAjeCr = function(){
    var total = 0 
    for(ctr=0;ctr<$scope.aje.length;ctr++)
    { total += parseFloat($scope.aje[ctr].credit) || 0}
    return (total) }   

    $scope.addAjeRow = function(index,keycode,$event)
    {$scope.clickedElement = $event.currentTarget.getAttribute("id");
    if(index==$scope.aje.length-1 && keycode ==13){
    $scope.aje.push({accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""})}}
    



    $scope.getAdjustedBalanceAssets = function(acct) {
 
    var balArr =  acct.balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&           (balance.tbday == $scope.currenttbday) && (balance.tbmonth == $scope.currenttbmonth)) })

   
    var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==acct._id) && (aje.tbdate ==             $scope.currentfye)) })
  

      var adjBal = 0;

      for(var ctr=0; ctr< entriesArr.length;ctr++) {
    
         if(acct.category=='Asset'){
         adjBal +=  parseFloat(entriesArr[ctr].debit) || 0 ; 
         adjBal -= parseFloat(entriesArr[ctr].credit) || 0;}
         else{
         adjBal -=  parseFloat(entriesArr[ctr].debit) || 0 ; 
         adjBal += parseFloat(entriesArr[ctr].credit) || 0;}
        
       }

      adjBal +=  balArr[0].unadjbal     

    return adjBal 

   }
   

$scope.subAdj = function(type){
    
      
      var adjBal = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.class==type})
      
        for(ctr=0;ctr<filtered.length;ctr++){
         
         var balArr = filtered[ctr].balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&  (balance.tbday == $scope.currenttbday) && (balance.tbmonth == $scope.currenttbmonth)) })
        
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate ==$scope.currentfye)) })       
        
          for(var ctr2=0;ctr2<entriesArr.length;ctr2++){

            if(filtered[ctr].category=='Asset'){
             adjBal +=  parseFloat(entriesArr[ctr2].debit) || 0 ; 
             adjBal -= parseFloat(entriesArr[ctr2].credit) || 0;}
            else{
            adjBal -=  parseFloat(entriesArr[ctr2].debit) || 0 ; 
            adjBal += parseFloat(entriesArr[ctr2].credit) || 0;}
         
          }     
          
         adjBal += balArr[0].unadjbal
         
        }

           
      return adjBal 

    }





$scope.subUnadj = function(type){
    
      
      var unadjBal = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.class==type})
       
        for(ctr=0;ctr<filtered.length;ctr++){
         
         var balArr = filtered[ctr].balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&  (balance.tbday == $scope.currenttbday) && (balance.tbmonth == $scope.currenttbmonth)) })
          
          unadjBal += balArr[0].unadjbal
         
        }

           
      return unadjBal 

    }



   $scope.subDebits = function(type){
    
      var debits = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.class==type})
       
        for(ctr=0;ctr<filtered.length;ctr++){
         
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate == $scope.currentfye)) })
          
           for(ctr2=0;ctr2<entriesArr.length;ctr2++){
            debits += parseFloat(entriesArr[ctr2].debit) || 0
           }
          
         
        }

           
      return debits

    

   }


$scope.subCredits = function(type){
    
      var credits = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.class==type})
       
        for(ctr=0;ctr<filtered.length;ctr++){
         
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate == $scope.currentfye)) })
          
           for(ctr2=0;ctr2<entriesArr.length;ctr2++){
            credits += parseFloat(entriesArr[ctr2].credit) || 0
           }
          
         
        }

           
      return credits

    }


$scope.TotalUnadj = function(category){
  
      var unadj = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.category==category})
      
        for(ctr=0;ctr<filtered.length;ctr++){
         
         var balArr = filtered[ctr].balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&  (balance.tbday == $scope.currenttbday) && (balance.tbmonth == $scope.currenttbmonth)) })
        
                  
         unadj += balArr[0].unadjbal
         
        }

           
      return unadj 

    }


$scope.getTotalDrs = function(category){
     
     var totaldebit = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.category==category})
      
        for(var ctr=0;ctr<filtered.length;ctr++){
         
        
        
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate ==$scope.currentfye)) })       
        
          for(var ctr2=0;ctr2<entriesArr.length;ctr2++){
           
              totaldebit += parseFloat(entriesArr[ctr2].debit) || 0;
                          
          }     
          
                
        }

           
      return totaldebit
    }



$scope.getTotalCrs = function(category){
    
    
      var totalcredit = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.category==category})
      
        for(var ctr=0;ctr<filtered.length;ctr++){
         
        
        
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate ==$scope.currentfye)) })       
        
          for(var ctr2=0;ctr2<entriesArr.length;ctr2++){
           
              totalcredit += parseFloat(entriesArr[ctr2].credit) || 0;
                          
          }     
          
                
        }

           
      return totalcredit

    }


$scope.TotalAdj = function(category){
    
      
      var adjBal = 0;
      
      var filtered = $scope.accounts.filter(function(account){ return account.category==category})
      
        for(var ctr=0;ctr<filtered.length;ctr++){
         
         var balArr = filtered[ctr].balances.filter(function(balance){ return ((balance.tbyear == $scope.currenttbyear) &&  (balance.tbday == $scope.currenttbday) && (balance.tbmonth == $scope.currenttbmonth)) })
        
         var entriesArr = $scope.ajeList.filter(function(aje){ return ((aje.accountID==filtered[ctr]._id) && (aje.tbdate ==$scope.currentfye)) })       
        
          for(var ctr2=0;ctr2<entriesArr.length;ctr2++){

            if(filtered[ctr].category=="Asset"){
              
             adjBal +=  parseFloat(entriesArr[ctr2].debit) || 0 ; 
             adjBal -= parseFloat(entriesArr[ctr2].credit) || 0;}
             
            else{
            adjBal -=  parseFloat(entriesArr[ctr2].debit) || 0 ; 
            adjBal += parseFloat(entriesArr[ctr2].credit) || 0;}
         
          }     
          
         adjBal += parseFloat(balArr[0].unadjbal) || 0
         
        }

           
      return adjBal 

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
  
    
  $scope.setContent = function(page)
  {$scope.content = '/static/' +   page}

 
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
   $scope.postAje()
   
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
  $scope.$apply();
    }).error(function(data,status,headers,config){   })

}


  }])
   