console.log('new post controller');

app.controller('NewpostCtrl', function($scope, $q, $location) {
  .then(() => {
        $location.url('/newpost')
})
