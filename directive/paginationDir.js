// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('paginationDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './directive/pagination.html',
    controller: 'paginationCtrl'//,
    //============= HAMBURGER MENU jQuery =================
   //  link: function(scope, element, attribute) {



  // }//,//END OF LINK
   //  scope:
};//END OF RETURN
});


// https://bencentra.com/code/2015/09/29/jquery-plugins-angular-directives.html
