chrome.webNavigation.onHistoryStateUpdated.addListener(({ url, tabId }) => {
  if (
    url.includes("linkedin.com/jobs/search") ||
    url.includes("glassdoor.com/Job")
  ) {
    // console.log("Listner Works Good");
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});
