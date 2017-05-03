angular.module('book-list', [])
.controller('CurrentBookList', function($scope, $http) {
  $scope.readingList = [];

  $http({
    method: 'GET',
    url: '/current'
  })
  .success(function(data) {
    console.log('post successful');
    data.forEach(function(bookObj) {
      $scope.readingList.push({
        title: bookObj.title,
        author: bookObj.author
      });
    });
  })
  .error(function(data, status) {
    console.log(status, 'error on get');
  });

  $scope.readingList.readBook = () => {
   $http({
    method: 'POST',
    url: '/current',
    data: JSON.stringify({
      title: $scope.readingList.bookTitle,
      author: $scope.readingList.bookAuthor})
  })
   .success(function(data) {
    console.log(data);
    console.log('post successful');
      $scope.readingList.push({
      title: data.title,
      author: data.author,
    });
  })
   .error(function(data, status) {
    console.log(status, data, 'error on post');
   });
  //$scope.read.$setPristine();
};

  $scope.readingList.removeBook = (c) => {
    console.dir(c);
    $http({
      method: 'PUT',
      url: '/current',
      data: JSON.stringify({
        title: c.title,
        author: c.author})
    })
    .success(function(data) {
      var index = $scope.toReadList.indexOf(c);
      console.log(index);
      $scope.toReadList.splice(index, 1);
      console.log('delete successful');
    })
    .error(function(data, status) {
      console.log(status, 'error on delete');
    });
  };


})
.directive('currentBook', function() {
  return {
    template: 'Title: {{book.title}} Author: {{book.author}}'
  };
});