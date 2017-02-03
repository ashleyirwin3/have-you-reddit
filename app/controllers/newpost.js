console.log('new post controller');

app.controller('NewpostCtrl', function($scope, $q, $location) {
  .then(() => {
        $location.url('/newpost')
        // link to id=postBox on html
  })
})

app.controller("NewpostCtrl",function($scope,$location,$http,authFactory){
  if(!firebase.auth().currentUser){
    $location.path("/login")

    let storageRef = firebase.storage().ref();

    let inputElement = document.getElementById("fileInput");

    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');


          storageRef.child(fileList[0].name).getDownloadURL()
          .then((url)=>{
            $location.path("/")
            $scope.url = url


            $http.get(`https://have-you-reddit.firebaseio.com/Users/.json`)
            .then((data)=>{
              console.log(data)
              $scope.uid = authFactory.getUid().uid
              console.log($scope.uid)

              $scope.email = authFactory.getUid().email
              console.log($scope.email)

              $http.post(`https://have-you-reddit.firebaseio.com/Pictures/.json`,
              {
               key : $scope.key,
               url : $scope.url,
               Title: $scope.postTitle,
               link: $scope.postUrl,
               user : $scope.email,
               uid : $scope.uid,
               counter: 0
              })
            })
         })
          .catch((error)=>{

            alert("error")
          })

})
}
}
})
