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

  // Get a database reference to our posts


var uploader1=document.getElementById('uploader1');
var fileButton1=document.getElementById('fileButton1');
fileButton1.addEventListener('change', function(e)
{
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key;
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
                        department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                        console.log(department);
                        year=snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val();
                        username=snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val();
                        teamname=department+year+username;
                        console.log(emailAd);
                        console.log("Teamname"+teamname);
                    
                        var file=e.target.files[0];
                        var storageRef=firebase.storage().ref(teamname+"/"+file.name);
                    
                        var task=storageRef.put(file);
                    
                        task.on('state_changed', function progress(snapshot)
                        {
                            var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                            uploader1.value=percentage;
                        },
                        function error(err) {},
                        function complete() {}
                        )
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
      

    // Attach an asynchronous callback to read the data at our posts reference
   
});

var uploader2=document.getElementById('uploader2');
var fileButton2=document.getElementById('fileButton2');
fileButton2.addEventListener('change', function(e)
{
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key;
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
                        department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                        console.log(department);
                        year=snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val();
                        username=snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val();
                        teamname=department+year+username;
                        console.log(emailAd);
                        console.log("Teamname"+teamname);
                    
                        var file=e.target.files[0];
                        var storageRef=firebase.storage().ref(teamname+"/"+file.name);
                    
                        var task=storageRef.put(file);
                    
                        task.on('state_changed', function progress(snapshot)
                        {
                            var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                            uploader2.value=percentage;
                        },
                        function error(err) {},
                        function complete() {}
                        )
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
});
