const BACKEND_URL = "https://YOUR_BACKEND.onrender.com/process"; // swap for local dev

chrome.contextMenus.create({
  id: "webmind",
  title: "WebMind",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "webmind") {
    chrome.tabs.sendMessage(tab.id, {
      type: "OPEN_SIDEBAR",
      text: info.selectionText,
    });
  }
});
