function getMailListAdd(year,team)
{
    var maillist=[];
    console.log(year+team);
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key, fullname;
    var emailAd;
    ref.once("value", function(snapshot) 
    {
        key=Object.keys(snapshot.val());
        console.log(key.length);
        for(var i=0;i<key.length;i++)
        {
            if(team==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val()) && year==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val()))
            {
                emailAd=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                console.log(emailAd);
                sendEmailAddFeatures(emailAd);
            }
        }
    });
    return maillist;
}

function getMailListApprove(year,team)
{
    var maillist=[];
    console.log(year+team);
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key, fullname;
    var emailAd;
    ref.once("value", function(snapshot) 
    {
        key=Object.keys(snapshot.val());
        console.log(key.length);
        for(var i=0;i<key.length;i++)
        {
            if(team==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val()) && year==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val()))
            {
                emailAd=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                console.log(emailAd);
                sendEmailApprove(emailAd);
            }
        }
    });
}

function getMailListReject(year,team)
{
    var maillist=[];
    console.log(year+team);
    var db = firebase.database();
    var ref = db.ref("users");
    var teamname,username,department,year,key, fullname;
    var emailAd;
    ref.once("value", function(snapshot) 
    {
        key=Object.keys(snapshot.val());
        console.log(key.length);
        for(var i=0;i<key.length;i++)
        {
            if(team==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('username').val()) && year==(snapshot.child(""+Object.keys(snapshot.val())[i]).child('year').val()))
            {
                emailAd=snapshot.child(""+Object.keys(snapshot.val())[i]).child('email').val();
                console.log(emailAd);
                sendEmailReject(emailAd);
            }
        }
    });
}

function sendEmailAddFeatures(mail) 
{ 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "projectmanagementsystem575241@gmail.com", 
      Password: "pms575241", 
      To: mail, 
      From: "projectmanagementsystem575241@gmail.com", 
      Subject: "Project Result - Modification", 
      Body: "You need to add more features in your project idea", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
    }); 
} 

function sendEmailApprove(mail) 
{ 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "projectmanagementsystem575241@gmail.com", 
      Password: "pms575241", 
      To: mail, 
      From: "projectmanagementsystem575241@gmail.com", 
      Subject: "Project Result - Approved", 
      Body: "Your project idea is approved. You can start working on it.", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
    }); 
} 

function sendEmailReject(mail) 
{ 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "projectmanagementsystem575241@gmail.com", 
      Password: "pms575241", 
      To: mail, 
      From: "projectmanagementsystem575241@gmail.com", 
      Subject: "Project Result - Rejected", 
      Body: "Your project idea is rejected. Please send another project idea.", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
    }); 
} 