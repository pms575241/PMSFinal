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
/*var db = firebase.database();
var ref = db.ref("users");
var teamname;
ref.once("value", function(snapshot) 
{
    var key=Object.keys(snapshot.val())[0];
    department=snapshot.child(""+key).child('department').val();
    year=snapshot.child(""+key).child('year').val();
    teamname=department+year+"Team";
    console.log(teamname);

}, function (errorObject) { 1
    console.log("The read failed: " + errorObject.code);
});


var storageRef = firebase.storage().ref();
var mainurl;

function subwork()
{
  var listRef=firebase.storage().ref('Amisha');
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
            <td><a href="${url}">${filename}</a></td>
            </tr>`
            table.innerHTML += row
        });
        
      });
     // buildTable(fileURLs);
  });
}

/*function buildTable(fileURLs)
  {
    document.getElementById("table-btn").style.display="block";
		var table = document.getElementById('myTable')
    for (var i = 0; i < fileURLs.length; i++)
    {
      var row = `<tr>
      <td><a href="${fileURLs[i]}">${fileURLs[i]}</a></td>
      </tr>`
      table.innerHTML += row
		}
  }
}*/

function dipslayUser()
{
var fb = firebase.database.ref();
var emailAddress="payalyadav1892@gmail.com";
function findUsersMatchingEmail( emailAddress, callback ) 
{
    fb.child('users').orderByChild('emailAddress').equalTo(emailAddress).once('value', function(snap)
    {
        callback( snap.val() );
    });
}
}