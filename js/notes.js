var notesData = [
    { title: "Doctor 1", detail: "This is the detail for Item 1." },
    { title: "Doctor 2", detail: "This is the detail for Item 2." },
    { title: "Doctor 3", detail: "This is the detail for Item 3." },
  ];
  
  window.addEventListener("DOMContentLoaded", function () {
    loadMenu();
    loadNotes();
  });
  
  document.getElementById("add-item-btn").addEventListener("click", function () {
    addEmptyItem();
  });
  
  function loadMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";
  
    for (var i = 0; i < notesData.length; i++) {
      var menuItem = document.createElement("li");
      menuItem.textContent = notesData[i].title;
      menuItem.classList.add("menu-item");
      menuItem.dataset.index = i;
  
      menuItem.addEventListener("click", function () {
        var index = parseInt(this.dataset.index);
        displayNotes(index);
        setActiveMenuItem(this);
      });
  
      menuList.appendChild(menuItem);
    }
  }
  
  function loadNotes() {
    var notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";
  
    for (var i = 0; i < notesData.length; i++) {
      var note = document.createElement("div");
      note.classList.add("notes");
      if (i === 0) {
        note.classList.add("active");
      }
      note.dataset.index = i;
  
      var noteTitle = document.createElement("h2");
      noteTitle.textContent = notesData[i].title;
      noteTitle.contentEditable = true;
      noteTitle.addEventListener("input", function () {
        var index = parseInt(this.parentNode.dataset.index);
        notesData[index].title = this.textContent;
        updateMenuTitle(index, this.textContent);
      });
  
      var noteDetail = document.createElement("p");
      noteDetail.textContent = notesData[i].detail;
      noteDetail.contentEditable = true;
      noteDetail.addEventListener("input", function () {
        var index = parseInt(this.parentNode.dataset.index);
        notesData[index].detail = this.textContent;
      });
  
      note.appendChild(noteTitle);
      note.appendChild(noteDetail);
      notesContainer.appendChild(note);
    }
  }
  
  function displayNotes(index) {
    var notes = document.getElementsByClassName("notes");
    for (var i = 0; i < notes.length; i++) {
      notes[i].classList.remove("active");
    }
  
    notes[index].classList.add("active");
  }
  
  function setActiveMenuItem(menuItem) {
    var menuItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
  
    menuItem.classList.add("active");
  }
  
  function addEmptyItem() {
    var newItemTitle = "New Note";
    var newItemDetail = "Edit this note...";
  
    var newItem = { title: newItemTitle, detail: newItemDetail };
    notesData.push(newItem);
  
    loadMenu();
    loadNotes();
  }
  
  function updateMenuTitle(index, title) {
    var menuItems = document.getElementsByClassName("menu-item");
    menuItems[index].textContent = title;
  }
  
  