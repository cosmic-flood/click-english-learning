chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      apiSuggestions: ['tabs', 'storage', 'scripting']
    });
  }
  chrome.action.setBadgeText({
    text: "",
  });

  // chrome.scripting.registerContentScripts([{
  //   id: "session-script",
  //   js: ["content-script.js"],
  //   matches: ["*://*.bilibili.com/*"],
  //   runAt: "document_end",
  // }])
  //   .then(() => {
  //     console.log('registratoin completed');
  //     let videoElements = document.getElementsByTagName('video');
  //     console.log(videoElements);
  //     videoElements[0].addEventListener("pause", ()=>{
  //       alert('paused')
  //     });
  //   })
  //   .catch((err) => console.warn("unexpected error", err));
});



let timeFrame = {};

function replayVideo() {
  let lakiVideoElements = document.getElementsByTagName('video');
  console.log(lakiVideoElements);
  let myvideo = lakiVideoElements[0];
  // myvideo.play();
  myvideo.pause();
  console.log(this.timeFrame);
  myvideo.currentTime = 250;
  myvideo.play();
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(`Received data from popup: ${request.timeFrame} @ ${request.tabId}`);

    // Process the data as needed
    chrome.action.setBadgeText({
      text: "1",
    });
    this.timeFrame = request.timeFrame;
    this.timeFrame = 10;
    // console.log(timeFrame);
    chrome.scripting.executeScript({
      // files: ["videocontrol.js"],
      func: replayVideo,
      target: { tabId: request.tabId },
    });

    // Optionally send a response back to the popup
    sendResponse({ response: "Data received" });
  }
);

// chrome.storage.sync.get(["replaytimeframe"]).then((result) => {
//   console.log("Value is " + result.key);
// });

const bilibili = 'https://www.bilibili.com/';
const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';
