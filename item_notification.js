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

/*notifyAdd(year,team)
{
    var maillist=[];
    console.log(year+team);
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
            console.log(key.length);
            for(var i=0;i<key.length;i++)
            {
                if(team==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val()) && year==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val()))
                {
                    emailAdr=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                    if(emailAdr==emailAd)
                    {
                        var tab = document.getElementById("table-btn2");
                        var row=`<tr>
                        <td>Project Modification<br>You need to add more features in your project idea</td>
                        </tr>`
                        var val = parseInt($('#stunotify').find('.number').text()); 
                        document.getElementById("stunotify").innerHTML=val+1;
                        tab.innerHTML+=row;
                    }
                }
            }
        });
    }
});
}*/
function notify()
{
    document.getElementById("stunotify").text.innerHTML=2;
    document.getElementById("noti1").style.display="block";
}
