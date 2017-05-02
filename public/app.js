angular.module('book-list', [])
.controller('ToRead', function($scope, $http) {
  $scope.booksToRead = [
    {title: 'test book', id: 1},
    {title: 'test book 2', id: 2}
  ];

  $scope.updateToRead = (newBook) => {
    console.log(newBook);
  //   booksToRead.insert({
  //     title: newBook,
  //     id: 3
  //   });
  //   this.newBook = '';
   };

   $http.get('something_not_sure_yet')
   .then(function (res) {
      $scope.content = res.data;
   }, function (res) {
    $scope.content = 'Something went wrong';
   });

})
.directive('eachBook', function() {
  return {

    template: 'Title: {{book.title}} Id: {{book.id}}'
  };
});
