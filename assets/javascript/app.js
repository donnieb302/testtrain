//alert ("Don't Miss Yo Train");
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyArNtpoc3Szr0qypGb4ND579SKDsJyhPN0",
    authDomain: "trainscheduler-ec66b.firebaseapp.com",
    databaseURL: "https://trainscheduler-ec66b.firebaseio.com",
    projectId: "trainscheduler-ec66b",
    storageBucket: "",
    messagingSenderId: "426334562699"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
//Button for adding train information
  $("#submit").on("click", function(event){
      event.preventDefault();
//Grab user input
      var trainName = $("#Train").val().trim();
      var trainDest = $("#Destination").val().trim();
      var trainFreq = $("#Frequency").val() == undefined ? '' :$("#Frequency").val().trim();
      var trainNext = $("#Next Arrival").val() == undefined ? '' :$("#Next Arrival").val().trim();
      var trainAway = $("#Minutes Away").val() == undefined ? '' :$("#Minutes Away").val().trim();

//Create local "temp" objects for holding data
    var trainInfo = {
      name: trainName,
      dest: trainDest,
      freq: trainFreq,
      next: trainNext,
      away: trainAway, 
    };
      
//Upload train info to database
      database.ref().push(trainInfo);
      database.ref().push(trainDest);
      database.ref().push(trainFreq);
      database.ref().push(trainNext);
      database.ref().push(trainAway);

  //Console.log everything
  console.log(trainInfo.name);
  console.log(trainInfo.dest);
  console.log(trainInfo.freq);
  console.log(trainInfo.next);
  console.log(trainInfo.away);


  //Clears all of the textboxes
    $("#Train").val("");
    $("#Destination").val("");
    $("#Frequency").val("");
    $("#Next Arrival").val("");
    $("#Minutes Away").val("");
});

//Create Firebase event for adding train info to the database and a row in the html
database.ref().on("child_added", function(childSnapshot, prevChidlKey) {
  console.log(childSnapshot.val());
//Store everything into a variable
      var trainName = childSnapshot.val().name;
      var trainDest = childSnapshot.val().dest;
      var trainFreq = childSnapshot.val().freq;
      var trainNext = childSnapshot.val().next;
      var trainAway = childSnapshot.val().away;

      console.log(trainName);
      console.log(trainDest);
      console.log(trainFreq);
      console.log(trainNext);
      console.log(trainAway);

      //Show train name
      //Show train destination
      //Show train frequency 
      //Show next train using Momentjs
      //Show how far away train is using Moment JS
      //Add train data into the table 
});
