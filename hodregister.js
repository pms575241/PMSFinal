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

var messagesRef = firebase.database().ref('guides_hods');
document.getElementById('hodregisterForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  var password = getInputVal('password');
  var fullname = getInputVal('fullname');
  var department = getInputVal('department');
  var email = getInputVal('email');
  var mbno = getInputVal('mbno'); 

  writeUserData(password, fullname,department, email, mbno);

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function writeUserData(password, fullname,department, email, mbno){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    password: password,
    fullname: fullname,
    department: department,
    email: email,
    mbno: mbno  
  });
}
}

function signUpWithEmailPassword() 
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => 
    {
      // Signed in 
      document.getElementById('hodregisterForm').reset();
      window.location.replace("index_hod.html");
      // ...
    })
    .catch((error) => 
    {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Invalid input");
      document.getElementById('hodregisterForm').reset();
      // ..
    });
}
