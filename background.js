function printText(text) {
  console.log("\ntext");
}
chrome.webNavigation.onCompleted.addListener(function(details) {
  // chrome.tabs.executeScript(details.tabId, {
  //         code:'console.log(document.);'
  //     });
  chrome.browserAction.onClicked.addListener(function(tab) {
    //Fired when User Clicks ICON
    console.log("I was run");
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { text: "needDOM" }, function(
      response
    ) {});
  });
});
