console.log('testing')

const app = angular.module('redditApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')

  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyAtF6bMtPEHRtwgHBVlH9lhgZubrn-yiO0",
    authDomain: "have-you-reddit.firebaseapp.com",
    databaseURL: "https://have-you-reddit.firebaseio.com",
    storageBucket: "have-you-reddit.appspot.com",
    messagingSenderId: "1077173442347"
  };
  firebase.initializeApp(config);

  // routing

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
      templateUrl: '/partials/register.html'
    .when('/newpost', {
      controller: 'NewpostCtrl',
      templateUrl: '/partials/newpost.html'
    })
})

// authorization

  checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/login')
          }
        })
      }
