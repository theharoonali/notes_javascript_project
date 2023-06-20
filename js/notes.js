window.onload = function() {
  changeCustomTab(0);
  changeTab(0);
};

function changeTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  const tabContents = document.getElementsByClassName("tab-content");

  // Remove active class from all tabs and tab contents
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    tabContents[i].classList.remove("active");
  }

  // Add active class to selected tab and tab content
  tabs[tabIndex].classList.add("active");
  tabContents[tabIndex].classList.add("active");
}

function changeCustomTab(tabIndex) {
  const tabs = document.getElementsByClassName("custom-tab");
  const tabContents = document.getElementsByClassName("custom-tab-content");

  // Remove active class from all tabs and tab contents
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    tabContents[i].classList.remove("active");
  }

  // Add active class to selected tab and tab content
  tabs[tabIndex].classList.add("active");
  tabContents[tabIndex].classList.add("active");
}
