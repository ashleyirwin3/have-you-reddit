console.log('already posted controller');

app.controller('PostedCtrl', function($scope, $q, $location) {
  .then(() => {
        $location.url('/posts')
        // link to id=postBox on html
  })
})
