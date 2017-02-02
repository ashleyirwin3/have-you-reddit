console.log('testing')

const app = angular.module('redditApp', ['ngRoute'])

  var config = {
    apiKey: "AIzaSyAtF6bMtPEHRtwgHBVlH9lhgZubrn-yiO0",
    authDomain: "have-you-reddit.firebaseapp.com",
    databaseURL: "https://have-you-reddit.firebaseio.com",
    storageBucket: "have-you-reddit.appspot.com",
    messagingSenderId: "1077173442347"
  };

firebase.initializeApp(config)

app.config(function ($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
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
      templateUrl: '/partials/newpost.html',
    })
    .otherwise({
      redirectTo: ('/')
    })
  })
