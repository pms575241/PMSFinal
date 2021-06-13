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

function teamValDisplay()
{ 
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key, fullname;
    var emailAd;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) 
    {
          // User is signed in.
          var newuser = firebase.auth().currentUser;
            emailAd=newuser.email;
            ref.once("value", function(snapshot) 
            {
                key=Object.keys(snapshot.val());
                for(var i=0;i<key.length;i++)
                {
                    if(emailAd==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val()))
                    {
                       username=snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val();
                       document.getElementById("usernameVal1").innerHTML=username;
                       document.getElementById("usernameVal2").innerHTML=username;

                       fullname=snapshot.child(""+Object.keys(snapshot.val())[i]).child('fullname').val();
                       document.getElementById("fullnameVal1").innerHTML="Name : "+fullname;
                       prn=snapshot.child(""+Object.keys(snapshot.val())[i]).child('prn').val();
                       document.getElementById("prnVal1").innerHTML="PRN : "+prn;
                       emailAd=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                       document.getElementById("emailVal1").innerHTML="Email Id : "+emailAd;
                       mbno=snapshot.child(""+Object.keys(snapshot.val())[i]).child('mbno').val();
                       document.getElementById("mbnoVal1").innerHTML="Mobile No. : "+mbno;
                       department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                       document.getElementById("departmentVal1").innerHTML="Department : "+department;
                       year=snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val();
                       document.getElementById("yearVal1").innerHTML="Year : "+year;
                    }
                }
        
            }, function (errorObject) { 1
                console.log("The read failed: " + errorObject.code);
            });
            
    } else 
    {
          // No user is signed in.
    }
    });
  }

function nameValDisplay()
{ 
  var db = firebase.database();
    var ref = db.ref("guides_hods");
    var teamname,username,department,year,key, fullname;
    var emailAd;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) 
    {
          // User is signed in.
          var newuser = firebase.auth().currentUser;
            emailAd=newuser.email;
            ref.once("value", function(snapshot) 
            {
                key=Object.keys(snapshot.val());
                for(var i=0;i<key.length;i++)
                {
                    if(emailAd==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val()))
                    {
                       fullname=snapshot.child(""+Object.keys(snapshot.val())[i]).child('fullname').val();
                       document.getElementById("fullnameVal1").innerHTML=fullname;
                       document.getElementById("fullnameVal2").innerHTML=fullname;

                       document.getElementById("fullnameVal3").innerHTML="Name : "+fullname;
                       emailAd=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                       document.getElementById("emailVal2").innerHTML="Email Id : "+emailAd;
                       mbno=snapshot.child(""+Object.keys(snapshot.val())[i]).child('mbno').val();
                       document.getElementById("mbnoVal2").innerHTML="Mobile No. : "+mbno;
                       department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                       document.getElementById("departmentVal2").innerHTML="Department : "+department;
                      
                    }
                }
        
            }, function (errorObject) { 1
                console.log("The read failed: " + errorObject.code);
            });
            
    } else 
    {
          // No user is signed in.
    }
    });
  }
  