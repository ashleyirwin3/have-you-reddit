console.log('testing')

const app = angular.module('redditApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/partials/home.html',
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: '/partials/login.html',
    })
    .when('/register', {
      controller: 'RegisterCtrl',
      templateUrl: '/partials/register.html',
    })
    .when('/newpost', {
      controller: 'NewpostCtrl',
      templateUrl: '/partials/newpost.html'
    })
})
