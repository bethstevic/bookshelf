angular.module('book-list', [])
.controller('ToRead', function($scope) {
  $scope.booksToRead = [
    {title: 'test book', id: 1},
    {title: 'test book 2', id: 2}
  ];

  this.inputResults = (data) => {
    booksToRead.push(data);
  };

})
.directive('eachBook', function() {
  return {
    template: 'Title: {{book.title}} Id: {{book.id}}'
  };
});
