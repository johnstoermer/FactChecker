console.log("popup script executed");
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === "gotData") {
    console.log("Message Received!");
    let data = JSON.parse(msg.data);
    if (data == null) {
      document.getElementById("fullName").innerHTML =
        "No Information Available";
      document.getElementById("rating").innerHTML = "";
      document.getElementById("takeagain").innerHTML = "";
      document.getElementById("difficulty").innerHTML = "";
      document.getElementById("url").innerHTML = "";
    } else {
      var fullName = data.name; //stores full name
      var rating = data.rating; //stores professor rating
      var takeAgainPerc = data.takeagain; //percentage of students that would take the class again
      var difficultyLevel = data.difficulty; // difficulty level
      var allReviews = data.reviews; //array of all reviews with the most recent being on top
      var reviewsLength = allReviews.length; //stores number of reviews in the JSON file
      var url = data.url; // url to ratemyprof for reviews

	  let classesSet = new Set();
	 for(let i=0;i<reviewsLength;i++){
		 classesSet.add(allReviews[i].class);
	 }
	 let classes="";
	 classesSet.forEach(function(value) {
		classes=classes+" "+value;
	  });

	  document.getElementById("fullName").innerHTML = fullName;
      document.getElementById("rating").innerHTML = "Overall Quality: <span id='num'>" + rating + "</span>" + "<span id='revnum'> (" + reviewsLength + " reviews) </span>";
      document.getElementById("takeagain").innerHTML = "Would Take Again: <span id='num'>" + takeAgainPerc +"</span>";
	  document.getElementById("difficulty").innerHTML = "Difficulty: <span id='num'>" + difficultyLevel + "</span>";
	  document.getElementById("classes").innerHTML = "Classes: " + classes;
      document.getElementById("url").href = url;
    }
  }
});

// //import * as data from './result.json'; //loading data from json file
// var data=JSON.parse('{"name": "Asad  Abukhalil","rating": "3.7","takeagain": "44%","difficulty": "2.2"}')
// const fullName=data.name; //stores full name
// const rating=data.rating; //stores professor rating
// const takeAgainPerc=data.takeagain; //percentage of students that would take the class again
// const difficultyLevel=data.difficulty;// difficulty level
// //const allReviews=data.reviews; //array of all reviews with the most recent being on top
// //var length=allReviews.length; //stores number of reviews in the JSON file
// // for(var i=0;i<length;i++)
// // {

// // }
// // //console.log(fullName);
// // document.write("Name:",fullName);
// // document.write("<br>");
// // document.write("Rating: ",rating,"/5");
// // document.write("<br>");
// // document.write("Students retaking: ",takeAgainPerc);
// // document.write("<br>");
// // document.write("Difficulty level: ",difficultyLevel,"/5");
// // document.write("<br>");
// // //HTML coding
// // // <html>
// // //     <head>
// // //         <script src="E:\mhacks_11\popup.js"></script>
// // //     </head>
// // // </html>
