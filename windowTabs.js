// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // Keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Open a New Tab
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join the tabs together

  return this;
};

// Create three browser windows
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]);
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]);
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]);

// Perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
