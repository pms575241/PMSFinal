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

function subworkFY()
{
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("FY").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        team= ($(this).text());
        teamname=""+department+year+team;
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
                <td><a href="${url}">${filename}</a></td>
                </tr>`
                table.innerHTML += row
            });
        
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}

function subworkSY()
{
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("SY").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        team= ($(this).text());
        teamname=""+department+year+team;
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
                <td><a href="${url}">${filename}</a></td>
                </tr>`
                table.innerHTML += row
            });
        
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
          notify();
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}

function subworkTY()
{
    var num;
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("TY").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        if(num>0)
        {
            for(var i=num-1;i>=0;i--)
            document.getElementById("myTable").deleteRow(i);
        }
        team= ($(this).text());
        teamname=""+department+year+team;
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
                  document.getElementById("theading").innerHTML=teamname;
                  var row = `<tr>
                  <td><a href="${url}">${filename}</a></td>
                  </tr>`
                  table.innerHTML += row
                  num = document.getElementById('myTable').rows.length;
                  console.log(num);
            });
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}


function subworkBTech()
{
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("BTech").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        team= ($(this).text());
        teamname=""+department+year+team;
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
                <td><a href="${url}">${filename}</a></td>
                </tr>`
                table.innerHTML += row
            });
        
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}

function subworkMTechFY()
{
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("MTechFY").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        team= ($(this).text());
        teamname=""+department+year+team;
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
                <td><a href="${url}">${filename}</a></td>
                </tr>`
                table.innerHTML += row
            });
        
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}

function subworkMTech()
{
    var teamname, department, year, team;
    department="cse";
    console.log(department);
    year=document.getElementById("MTech").text;
    console.log(year);
    $(document).ready(function () 
    {
      $('#team li a').on('click', function () 
      {
        team= ($(this).text());
        teamname=""+department+year+team;
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
                <td><a href="${url}">${filename}</a></td>
                </tr>`
                table.innerHTML += row
            });
        
          });
     // buildTable(fileURLs);
         });
      });
      $('#add').on("click", function()
      {
          getMailListAdd(year,team);
      });
      $('#approve').on("click", function()
      {
          getMailListApprove(year,team);
      });
      $('#reject').on("click", function()
      {
          getMailListReject(year,team);
      });
    });
}

