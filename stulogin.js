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

function signInWithEmailPassword() 
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => 
    {
      // Signed in 
      document.getElementById('stuloginForm').reset();
      window.location.replace("index_student.html");
      // ...
    }).catch((error) => 
    {
      switch (error.code) 
      {
        case "auth/invalid-email":
        case "auth/wrong-password":
        case "auth/user-not-found":
          {
            this.accountErrorMessage = "Wrong email address or password.";
            break;
          }
        case "auth/user-disabled":
        case "user-disabled":
          {
            this.accountErrorMessage = "This account is disabled";
            break;
          }
        }
        window.alert(accountErrorMessage);
        document.getElementById('stuloginForm').reset();
    });
}


    
function logout()
{
    firebase.auth().signOut().then(function()
    {
        window.location.replace("index.html");
    }).catch(function(error)
    {

    });  
}

function getUserData()
{
  var newuser=firebase.auth().currentUser;
  console.log(newuser.email);
}