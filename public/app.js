angular.module('book-list', [])
.controller('ToRead', function($scope, $http) {
  $scope.toReadList = [];

  $http({
    method: 'GET',
    url: '/books'
  })
  .success(function(data) {
    console.log('post successful');
    data.forEach(function(bookObj) {
      $scope.toReadList.push({
        title: bookObj.title,
        author: bookObj.author
      });
    });
  })
  .error(function(data, status) {
    console.log(status, 'error on get');
  });

  $scope.toReadList.addBook = () => {
   $http({
    method: 'POST',
    url: '/books',
    data: JSON.stringify({
      title: $scope.toReadList.bookTitle,
      author: $scope.toReadList.bookAuthor})
  })
   .success(function(data) {
    console.log(data);
    console.log('post successful');
      $scope.toReadList.push({
      title: data.title,
      author: data.author
    });
  })
   .error(function(data, status) {
    console.log(status, data, 'error on post');
   });
  //$scope.read.$setPristine();
};

  $scope.toReadList.deleteBook = () => {
    console.log($scope.toReadList);
    $http({
      method: 'DELETE',
      url: '/books',
      data: JSON.stringify({
        title: $scope.toReadList.bookTitle,
        author: $scope.toReadList.bookAuthor})
    })
    .success(function(data) {
      console.log('delete successful');
      $scope.toReadList.remove({
      title: data.title,
      author: data.author
      });
    })
    .error(function(data, status) {
      console.log(status, 'error on delete');
    });
  };


})
.directive('eachBook', function() {
  return {
    template: 'Title: {{book.title}} Author: {{book.author}}'
  };
});
