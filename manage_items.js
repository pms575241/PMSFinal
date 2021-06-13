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

function manage()
{

}


function manageWork()
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
                        department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                        year=snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val();
                        username=snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val();
                        teamname=department+year+username;
                            console.log(teamname);
                            var listRef=firebase.storage().ref(teamname);
                            listRef.listAll().then(function(res)
                            {
                                res.items.forEach(function(itemRef)
                                {     
                                    itemRef.getDownloadURL().then(function(url)
                                    {
                                        console.log(url);
                                        var filename=itemRef.name;  
                                        document.getElementById("table-btn").style.display="block";
                                        var table = document.getElementById('myTable');
                                        var row = `<tr>
                                        <td> <button class="btn" oncllick="deleteFile()"><i class="fa fa-trash"></i></button><a href="${url}" id="fileUrl">${filename}</a> </td>
                                        </tr>`
                                        table.innerHTML += row
                                    });
                                
                                });
                        // buildTable(fileURLs);
                            });
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

function deleteFile()
{
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
                        department=snapshot.child(""+Object.keys(snapshot.val())[i]).child('department').val();
                        year=snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val();
                        username=snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val();
                        teamname=department+year+username;
                            console.log(teamname);
                        $(document).ready(function () 
                        {
                            $('#btn i').on('click', function () 
                            {
                                     
                                    var url=document.getElementById("fileUrl").href;
                                    console.log(url);
                                    var fileRef=storage.refFromUrl(url);
                                    fileRef.delete().then(function()
                                    {
                                        console.log("Deleted");
                                    }).catch(function(error)
                                    {

                                    });
                            });
                        });
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