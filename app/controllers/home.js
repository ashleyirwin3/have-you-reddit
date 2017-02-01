app.controller('HomeCtrl', function() {
  console.log('home controller')
})

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtF6bMtPEHRtwgHBVlH9lhgZubrn-yiO0",
    authDomain: "have-you-reddit.firebaseapp.com",
    databaseURL: "https://have-you-reddit.firebaseio.com",
    storageBucket: "have-you-reddit.appspot.com",
    messagingSenderId: "1077173442347"
  };
  firebase.initializeApp(config);
