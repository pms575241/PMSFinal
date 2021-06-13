var firebaseConfig = {
    apiKey: "AIzaSyAfl7OtAhYWkCqpXAXu8e1zdHGeR4ag6k8",
    authDomain: "pms575241-ba07b.firebaseapp.com",
    databaseURL: "https://pms575241-ba07b-default-rtdb.firebaseio.com",
    projectId: "pms575241-ba07b",
    storageBucket: "pms575241-ba07b.appspot.com",
    messagingSenderId: "666442718917",
    appId: "1:666442718917:web:c1320499426ee641f55aac",
    measurementId: "G-7J53PYXF8K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function updatePass()
  {
    var auth=firebase.auth();
    var user=firebase.auth().currentUser;
    if(user !=null)
    {
      var emailAddress=user.email;
      console.log(emailAddress);
      auth.sendPasswordResetEmail(emailAddress).then(function()
      {
          window.alert("Mail sent");
      }).catch(function(error)
      {

      });
    }    
}

function forgotPass()
{
  var auth=firebase.auth();
  var emailAddress=document.getElementById("email").value;
  console.log(emailAddress);
  auth.sendPasswordResetEmail(emailAddress).then(function()
    {

    }).catch(function(error)
    {

    });

}