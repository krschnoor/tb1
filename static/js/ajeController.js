
setJournalEntry = function($scope){

$scope.aje = [{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
 {accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""},
{accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""}]

$scope.ajeEdit

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

    $scope.addAjeRow = function(index,keycode,$event){
    $scope.clickedElement = $event.currentTarget.getAttribute("id");
    if(index==$scope.aje.length-1 && keycode ==13){
    $scope.aje.push({accountID:"",tbdate:$scope.currentfye,desc:"",debit:"",credit:""})}}
    
    $scope.addAjeEditRow = function(index,keycode,$event){
    $scope.clickedElement = $event.currentTarget.getAttribute("id");
    var ajeid = $scope.ajeEdit[0].ajeid
    if(index==$scope.ajeEdit.length-1 && keycode ==13){
    $scope.ajeEdit.push({accountID:"",ajeid:ajeid,tbdate:$scope.currentfye,desc:"",debit:"",credit:""})}}
    


   $scope.totalAjeEditDr = function(){
    var total = 0 
    for(ctr=0;ctr<$scope.ajeEdit.length;ctr++)
    { total += parseFloat($scope.ajeEdit[ctr].debit) || 0}
    return (total) }   

   $scope.totalAjeEditCr = function(){
    var total = 0 
    for(ctr=0;ctr<$scope.ajeEdit.length;ctr++)
    { total += parseFloat($scope.ajeEdit[ctr].credit) || 0}
    return (total) }   


}