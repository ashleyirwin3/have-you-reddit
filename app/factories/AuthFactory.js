"esversion: 6";

 app.factory('AuthFactory', ($q, $http) => {
   return {

     login (email, pass) {
       // converts native ES6 promise to angular promise so no $scope.$apply needed
       return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass));
     },

     logOut () {
      console.log("AuthFactory logOut function called")
      return $q.resolve(firebase.auth().signOut())
     },

     getUserId () {
       return firebase.auth().currentUser.uid;
       console.log(currentUser.uid);
     },

     register (email, pass) {
        return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))
     },

      // get user key name and post it to   users.json
      // redo and use AuthFactory.getUserId() ????
     putNewUserInFirebase () {
      var userId = firebase.auth().currentUser.uid
      var userEmail = firebase.auth().currentUser.email

      var newUser = {
                      "name": userEmail,
                      "uid": userId
                    }

      $http.post(`https://have-you-reddit.firebaseio.com/users.json`, JSON.stringify(newUser))
     }
   };
 });
