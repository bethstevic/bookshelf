angular.module('book-list', [])
.controller('ToRead', function($scope, $http) {
  // var toReadList = this;
  $scope.toReadList = [];

  $scope.toReadList.addBook = () => {
    //console.log('hello');
    console.log($scope.toReadList.bookTitle, 'book title');
    $scope.toReadList.push({
      title: $scope.toReadList.bookTitle,
      id: 3
    });
    this.newBook = '';
   $http({
    method: 'POST',
    url: '/books',
    data: JSON.stringify({title: $scope.toReadList.bookTitle})
  });
};

  // $http.post({
  //   url: '/books',
  //   params: {title: toReadList.books.title}
  //  })
  //  .then(function(res, req) {
  //   $scope.content = req.data;
  //  }, function (res, req) {
  //   $scope.content = 'Something went wrong';
  //  });

   // $http.get({
   //  url: '/books',
   //  params: {title: toReadList.books.title}
   // })
   // .then(function (res, req) {
   //    $scope.content = res.data;
   // }, function (res) {
   //  $scope.content = 'Something went wrong';
   // });


})
.directive('eachBook', function() {
  return {
    template: 'Title: {{book.title}} Id: {{book.id}}'
  };
});
