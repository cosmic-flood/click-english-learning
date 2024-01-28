
console.log('content-script.js');
document.getElementsByTagName('video');

chrome.action.onClicked.addListener(async (tab) => {
  console.log('tab click');
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: 'C',
  });
  if (tab.url.startsWith(bilibili)) {
    await chrome.scripting.executeScript({
      files: ["videocontrol.js"],
      target: { tabId: tab.id },
    });
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: 'ON',
    });
  }
});