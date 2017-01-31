console.log('testing')

const app = angular.module('redditApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/partials/home.html',
    })
})
