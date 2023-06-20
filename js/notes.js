window.onload = function() {
  // Set default tab as active and open
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
