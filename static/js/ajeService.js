angular.module('TrialBalance').service('ajeservice',function($http,$window,$q){

  


this.postAje = function(scope){
 
 var deferred = $q.defer()
    
    $http.post('/newEntry/',{entry:scope.aje,client:scope.openclient[0].name}).success(
      function(data,status,headers,config){
      deferred.resolve()
      scope.clearAje()  
      for(var ctr=0;ctr<data[0].aje.length;ctr++){
       scope.ajeList.push(data[0].aje[ctr])
       }

     })
   .error(function(data,status,headers,config){ })
   
     
  return deferred.promise
 

}


this.getAjes = function(){
return ajeList
     
}



this.postAjeEdit = function(scope){
     
  var ajeid = scope.ajeEdit[0].ajeid


  $http.post('/newEntryEdit/',{entry:scope.ajeEdit,client:scope.openclient[0].name,id:ajeid})
   .success(function(data,status,headers,config){
  
     alert("Entry Adjsuted Successfully.")

     for(var ctr = scope.ajeList.length-1;ctr>=0;ctr--){

       if(scope.ajeList[ctr].ajeid ==ajeid ){
         scope.ajeList.splice(ctr,1)}
     }

    for(var ctr = 0;ctr<scope.ajeEdit.length;ctr++){
    scope.ajeList.push(scope.ajeEdit[ctr])}

    scope.setContent('start.html')
     
  })

}

})