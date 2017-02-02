console.log('new post ctrl')

app.controller('NewpostCtrl', function($scope, $location, AuthFactory){
  $scope.post = () => AuthFactory
    .post()
})
