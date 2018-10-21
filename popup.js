console.log("popup script executed");
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === "gotData") {
    console.log("Message Received!");
    let data = JSON.parse(msg.data);
    if (data == null) {
      document.getElementById("title").innerHTML =
        "No Information Available";
      document.getElementById("mugshot").innerHTML = "";
      document.getElementById("headline").innerHTML = "";
      document.getElementById("truthMeter").innerHTML = "";
      document.getElementById("explanation").innerHTML= "";
      document.getElementById("url").innerHTML = "";
    } else {
      var title = data.title; //stores artile title
      var mugshot = data.mugshot; //stores artile pic
      var headline = data.headline; //stores sentence about article
      var truthMeter = data.meter; // truthMeter level
      var explanation = data.explanation; // Short explanation about truth meter
      var url = data.url; // url to article

      document.getElementById("title").innerHTML = `<span>${title}</span>`;
      document.getElementById("mugshot").innerHTML = `<img src=${mugshot}>`;
      document.getElementById("headline").innerHTML = `<span>${headline}</span>`;
      document.getElementById("truthMeter").innerHTML = `<img src=${truthMeter}>`;
      document.getElementById("explanation").innerHTML = `<span>${explanation}</span>`;
      document.getElementById("url").href = url;
    }
  }
});
