angular.module("app").controller("paginationCtrl", function($scope) {


      $scope.filteredTodos = []
     ,$scope.currentPage = 1
     ,$scope.numPerPage = 10
     ,$scope.maxSize = 5;

     $scope.makeTodos = function() {
       $scope.todos = [];
       for (i=1;i<=1000;i++) {
         $scope.todos.push({ text:'todo '+i, done:false});
       }
     };
     $scope.makeTodos();

     $scope.$watch('currentPage + numPerPage', function() {
       var begin = (($scope.currentPage - 1) * $scope.numPerPage)
       , end = begin + $scope.numPerPage;

       $scope.filteredTodos = $scope.todos.slice(begin, end);
     });






//======================  If data isn't available on scope when page one loads (but is after switching between pages) rearange .$watch insid of .then like example below =======================
//
//     $scope.getPosts = function() {
//         adminSvc.getPostData()
//             .then(function(res) {
//                 $scope.posts = res.reverse();
//                 console.log($scope.posts)
// //----------------------------
//                 $scope.$watch('currentPage + numPerPage', function() {
//                     var begin = (($scope.currentPage - 1) * $scope.numPerPage),
//                         end = begin + $scope.numPerPage;
//
//                $scope.filteredPosts = $scope.posts.slice(begin, end);
//                 });
// //----------------------------
//             })
//     }
//     $scope.getPosts();
//
// // ================== Pagination =======================
//     $scope.filteredPosts = []
//     $scope.currentPage = 1
//     $scope.numPerPage = 10
//     $scope.maxSize = 3;



// http://plnkr.co/edit/81fPZxpnOQnIHQgp957q?p=preview



});//END OF CONTROLLER
